import { LOCATIONS_FETCH_SUCCESSFUL, ERROR_FETCHING_LOCATIONS, FETCHING_LOCATIONS, LOCATION_ID_FETCH_SUCCESSFUL, FETCHING_LOCATION_ID } from '../constants/location.constants';

export const locationsFetchSuccessful = (locations: any) => ({
    type: LOCATIONS_FETCH_SUCCESSFUL,
    payload: locations

});

export const fetchError = (error: any) => ({
    type: ERROR_FETCHING_LOCATIONS,
    payload: error
});

export const fetchingLocations = () => ({ type: FETCHING_LOCATIONS });

export const locationIdFetchSuccessful = (location: any) => ({
    type: LOCATION_ID_FETCH_SUCCESSFUL,
    payload: location

});

export const fetchingLocationId = (id: any) => ({ type: FETCHING_LOCATION_ID, payload: id });