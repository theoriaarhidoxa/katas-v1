import {KataActionsList, stringData} from "../literals";
import {Dispatch} from "react";
import {KataAction} from "../interfaces";

export const fetchKatas = (page: number) => {
    return async (dispatch: Dispatch<KataAction>) => {
        try {
            const res = await fetch(`${stringData.ALL_KATAS}${page}`);
            const katas = await res.json();
            dispatch({type: KataActionsList.SET_LIST, payload: katas.data});
            dispatch({type: KataActionsList.SET_TOTAL_PAGES, payload: katas['totalPages']});
        } catch (e) {
            console.log(e);
        } finally {
            dispatch({type: KataActionsList.SET_LOADING, payload: false});
        }
    };
};
