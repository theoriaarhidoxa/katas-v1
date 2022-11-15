import './App.scss';
import React, {FC, useEffect, useRef} from "react";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";
import {useDispatch} from "react-redux";
import {fetchKatas} from "./store/action-creators";
import {KataActionsList, stringData} from "./literals";
import {useTypedSelector} from "./hooks/useTypedSelector";


const App: FC = () => {
    const dispatch = useDispatch();
    const {page, loading, list, totalPages} = useTypedSelector(state => state);

    useEffect(() => {
        dispatch(fetchKatas(page));
    }, [page]);

    const listElement = useRef<HTMLDivElement>(null);

    const pagesArrayCreator = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    const p = pagesArrayCreator();

    const pageNav = (num: number) => {
        listElement.current?.scrollTo(0, 0);
        dispatch({type: KataActionsList.SET_PAGE, payload: num - 1});
    };

    const arrowNav = (num: number, dir?: string) => {
        const lt = dir === stringData.BACKWARDS;
        switch (num) {
            case 0: dispatch({type: KataActionsList.SET_PAGE, payload: lt ? totalPages - 1 : page + 1}); break;
            case totalPages - 1: dispatch({type: KataActionsList.SET_PAGE, payload: lt ? page - 1 : 0}); break;
            default: dispatch({type: KataActionsList.SET_PAGE, payload: lt ? page - 1 : page + 1}); break;
        }

        listElement.current?.scrollTo(0, 0);
    };

    return (
        <>
            <Pagination currentPage={page} pagesArray={p} onPageClick={pageNav} onDirClick={arrowNav} />
            <p>Список решённых задач, получаемый посредством CodeWars Code Challenges API.<br/> Пагинация и ссылки для
                перехода на карточку задачи.</p>

            {loading && <Loader />}

            <div className="listWrapper" ref={listElement}>
                {list.map(el => {
                    const {id, completedAt, name} = el;
                    const parsedDate = completedAt.substring(0, completedAt.indexOf('T')).split('-').reverse().join('.');
                    return (
                        <div key={id} className='listWrapper__item'>
                            <a target='_blank' href={`${stringData.SINGLE_KATA}${id}`}>{name}</a>
                            <small>Завершена {parsedDate}</small>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default App;
