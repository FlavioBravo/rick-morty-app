import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { map, catchError, switchMap } from "rxjs/operators";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { characterIdFetchSuccessful, charactersFetchSuccessful, fetchError } from "../actions/character.actions";
import { FETCHING_CHARACTERS, FETCHING_CHARACTER_ID } from "../constants/character.constants";
import { RickAndMortyService } from "../../services/rick-and-morty.service";

@Injectable()
export class CharacterEffects {
    @Effect()
    characters$: Observable<Action> = this.actions$.pipe(
        ofType(FETCHING_CHARACTERS),
        switchMap(action =>
            this.http
                .getCharactersList()
                .pipe(
                    map(charactersFetchSuccessful),
                    catchError(err => of(fetchError(err)))
                )
         )
    );

    @Effect()
    characterId$: Observable<Action> = this.actions$.pipe(
        ofType(FETCHING_CHARACTER_ID),
        switchMap((action: any) =>
            this.http
                .getCharacterById(action?.payload)
                .pipe(
                    map(characterIdFetchSuccessful),
                    catchError(err => of(fetchError(err)))
                )
         )
    );

    constructor(private actions$: Actions<Action>, private http: RickAndMortyService) {
        console.log("character effects initialized");
    }
}