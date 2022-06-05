import { LOCATIONS_FETCH_SUCCESSFUL, ERROR_FETCHING_LOCATIONS, FETCHING_LOCATIONS, LOCATION_ID_FETCH_SUCCESSFUL, FETCHING_LOCATION_ID } from '../constants/location.constants';

const initialState = {
    loading: false,
    locationsList: [''],
    location: {},
    error: ''
};

export interface LocationState {
    loading: boolean;
    locationsList: Array<any>;
    location: any;
    error: string;
}

export function locationReducer(state = initialState, action: any) {
    switch (action.type) {
        case LOCATIONS_FETCH_SUCCESSFUL:
            return { ...state, locationsList: action.payload.results, loading: false };
        case ERROR_FETCHING_LOCATIONS:
            return { ...state, error: action.payload, loading: false };
        case FETCHING_LOCATIONS:
            return { ...state, loading: true };
        case LOCATION_ID_FETCH_SUCCESSFUL:
            return { ...state, location: action.payload, loading: false };
        case FETCHING_LOCATION_ID:
            return { ...state, loading: true };
        default:
            return state;
    }
}