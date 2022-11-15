import {KataActionsList} from "./literals";

export interface IAppState {
    loading: boolean;
    list: any[];
    totalPages: number;
    page: number;
}

interface setLoadingAction {
    type: KataActionsList.SET_LOADING;
    payload: boolean;
}

interface setListAction {
    type: KataActionsList.SET_LIST;
    payload: any[];
}

interface setPageAction {
    type: KataActionsList.SET_PAGE;
    payload: number;
}

interface setTotalPagesAction {
    type: KataActionsList.SET_TOTAL_PAGES;
    payload: number;
}

export type KataAction = setLoadingAction | setListAction | setPageAction | setTotalPagesAction;

export interface IPaginationProps {
    currentPage: number;
    pagesArray: number[];
    onPageClick: (page: number) => void;
    onDirClick: (page: number, direction?: string) => void;
}
