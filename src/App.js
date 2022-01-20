import './App.scss';
import React, {useState, useEffect, useRef} from "react";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";

export const stringData = {
    ALL_KATAS: `https://www.codewars.com/api/v1/users/catchaser/code-challenges/completed?page=`,
    SINGLE_KATA: `https://www.codewars.com/kata/`,
    BACKWARDS: `backwards`
};

function App() {

    const [list, setList] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchKatas().then();
    }, [page]);

    const listElement = useRef();

    const fetchKatas = async () => {
        const res = await fetch(`${stringData.ALL_KATAS}${page}`);
        const katas = await res.json();
        setList(katas.data);
        setTotalPages(katas['totalPages']);
    };

    const pagesArrayCreator = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    const p = pagesArrayCreator(totalPages);

    const pageNav = num => {
        listElement.current.scrollTo(0, 0);
        setPage(num - 1);
    };

    const arrowNav = (num, dir) => {
        const lt = dir === stringData.BACKWARDS;
        switch (num) {
            case 0:
                setPage(lt ? totalPages - 1 : page + 1);
                break;
            case totalPages - 1:
                setPage(lt ? page - 1 : 0);
                break;
            default:
                setPage(lt ? page - 1 : page + 1);
                break;
        }
        listElement.current.scrollTo(0, 0);
    };

    return (
        <>
            <Pagination currentPage={page} pagesArray={p} onPageClick={pageNav} onDirClick={arrowNav} />

            <p>Список решённых задач, получаемый посредством CodeWars Code Challenges API.<br/> Пагинация и ссылки для
                перехода на карточку задачи.</p>

            {!list.length && <Loader />}

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
