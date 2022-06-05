import { EPISODES_FETCH_SUCCESSFUL, EPISODE_ID_FETCH_SUCCESSFUL, ERROR_FETCHING_EPISODES, FETCHING_EPISODES, FETCHING_EPISODE_ID } from '../constants/episode.constants';

const initialState = {
    loading: false,
    episodesList: [''],
    episode: {},
    error: ''
};

export interface episodeState {
    loading: boolean;
    episodesList: Array<any>;
    episode: any;
    error: string;
}

export function episodeReducer(state = initialState, action: any) {
    switch (action.type) {
        case EPISODES_FETCH_SUCCESSFUL:
            return { ...state, episodesList: action.payload.results, loading: false };
        case ERROR_FETCHING_EPISODES:
            return { ...state, error: action.payload, loading: false };
        case FETCHING_EPISODES:
            return { ...state, loading: true };
        case EPISODE_ID_FETCH_SUCCESSFUL:
            return { ...state, episode: action.payload, loading: false };
        case FETCHING_EPISODE_ID:
            return { ...state, loading: true };
        default:
            return state;
    }
}