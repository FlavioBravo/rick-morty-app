import { ActionReducerMap } from "@ngrx/store";
import { characterReducer, CharacterState } from "./character.reducer";
import { episodeReducer, episodeState } from "./episode.reducer";
import { locationReducer, LocationState } from "./location.reducer";

export interface AppState {
    characters: CharacterState;
    locations: LocationState;
    episodes: episodeState;
}

export const actionReducerMap: ActionReducerMap<AppState> = {
    characters: characterReducer,
    locations: locationReducer,
    episodes: episodeReducer
};