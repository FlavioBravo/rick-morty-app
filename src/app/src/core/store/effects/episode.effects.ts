import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { map, catchError, switchMap } from "rxjs/operators";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { RickAndMortyService } from "../../services/rick-and-morty.service";
import { FETCHING_EPISODES, FETCHING_EPISODE_ID } from "../constants/episode.constants";
import { fetchError, episodesFetchSuccessful, episodeIdFetchSuccessful } from "../actions/episode.actions";

@Injectable()
export class EpisodeEffects {
    @Effect()
    episodes$: Observable<Action> = this.actions$.pipe(
        ofType(FETCHING_EPISODES),
        switchMap(action =>
            this.http
                .getEpisodesList()
                .pipe(
                    map(episodesFetchSuccessful),
                    catchError(err => of(fetchError(err)))
                )
         )
    );

    @Effect()
    episode$: Observable<Action> = this.actions$.pipe(
        ofType(FETCHING_EPISODE_ID),
        switchMap((action: any) =>
            this.http
                .getEpisodeById(action?.payload)
                .pipe(
                    map(episodeIdFetchSuccessful),
                    catchError(err => of(fetchError(err)))
                )
         )
    );

    constructor(private actions$: Actions<Action>, private http: RickAndMortyService) {
        console.log("episodes effects initialized");
    }
}