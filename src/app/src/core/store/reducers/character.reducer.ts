import { CHARACTERS_FETCH_SUCCESSFUL, CHARACTER_ID_FETCH_SUCCESSFUL, ERROR_FETCHING_CHARACTERS, FETCHING_CHARACTERS, FETCHING_CHARACTER_ID } from '../constants/character.constants';

const initialState = {
    loading: false,
    characterslist: [''],
    character: {},
    error: ''
};

export interface CharacterState {
    loading: boolean;
    characterslist: Array<any>;
    character: any;
    error: string;
}

export function characterReducer(state = initialState, action: any) {
    switch (action.type) {
        case CHARACTERS_FETCH_SUCCESSFUL:
            return { ...state, characterslist: action.payload.results, loading: false };
        case ERROR_FETCHING_CHARACTERS:
            return { ...state, error: action.payload, loading: false };
        case FETCHING_CHARACTERS:
            return { ...state, loading: true };
        case CHARACTER_ID_FETCH_SUCCESSFUL:
            return { ...state, character: action.payload, loading: false };
        case FETCHING_CHARACTER_ID:
            return { ...state, loading: true };
        default:
            return state;
    }
}