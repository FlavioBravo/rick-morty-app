import { CHARACTERS_FETCH_SUCCESSFUL, CHARACTER_ID_FETCH_SUCCESSFUL, ERROR_FETCHING_CHARACTERS, FETCHING_CHARACTERS, FETCHING_CHARACTER_ID } from '../constants/character.constants';

export const charactersFetchSuccessful = (characters: any) => ({
    type: CHARACTERS_FETCH_SUCCESSFUL,
    payload: characters

});

export const fetchError = (error: any) => ({
    type: ERROR_FETCHING_CHARACTERS,
    payload: error
});

export const fetchingCharacters = () => ({ type: FETCHING_CHARACTERS });

export const characterIdFetchSuccessful = (character: any) => ({
    type: CHARACTER_ID_FETCH_SUCCESSFUL,
    payload: character

});

export const fetchingCharacterId = (id: any) => ({ type: FETCHING_CHARACTER_ID, payload: id });
