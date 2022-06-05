import { EPISODES_FETCH_SUCCESSFUL, EPISODE_ID_FETCH_SUCCESSFUL, ERROR_FETCHING_EPISODES, FETCHING_EPISODES, FETCHING_EPISODE_ID } from '../constants/episode.constants';

export const episodesFetchSuccessful = (episodes: any) => ({
    type: EPISODES_FETCH_SUCCESSFUL,
    payload: episodes

});

export const fetchError = (error: any) => ({
    type: ERROR_FETCHING_EPISODES,
    payload: error
});

export const fetchingEpisodes = () => ({ type: FETCHING_EPISODES });

export const episodeIdFetchSuccessful = (episode: any) => ({
    type: EPISODE_ID_FETCH_SUCCESSFUL,
    payload: episode

});

export const fetchingEpisodeId = (id: any) => ({ type: FETCHING_EPISODE_ID, payload: id });