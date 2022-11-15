import {IAppState, KataAction} from "../interfaces";
import {KataActionsList} from "../literals";

const initialState: IAppState = {
    loading: true,
    list: [],
    totalPages: 0,
    page: 0
};

export const kataReducer = (state = initialState, action: KataAction): IAppState => {
    switch (action.type) {
        case KataActionsList.SET_LOADING:
            return {...state, loading: action.payload};
        case KataActionsList.SET_LIST:
            return {...state, list: action.payload};
        case KataActionsList.SET_PAGE:
            return {...state, page: action.payload};
        case KataActionsList.SET_TOTAL_PAGES:
            return {...state, totalPages: action.payload};
        default:
            return state;
    }
};
