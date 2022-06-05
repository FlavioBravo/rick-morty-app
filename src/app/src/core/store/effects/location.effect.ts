import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { map, catchError, switchMap, tap } from "rxjs/operators";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { RickAndMortyService } from "../../services/rick-and-morty.service";
import { FETCHING_LOCATIONS, FETCHING_LOCATION_ID } from "../constants/location.constants";
import { fetchError, locationIdFetchSuccessful, locationsFetchSuccessful } from "../actions/location.actions";

@Injectable()
export class LocationEffects {
    @Effect()
    locations$: Observable<Action> = this.actions$.pipe(
        ofType(FETCHING_LOCATIONS),
        switchMap(action =>
            this.http
                .getLocationsList()
                .pipe(
                    map(locationsFetchSuccessful),
                    catchError(err => of(fetchError(err)))
                )
         )
    );

    @Effect()
    location$: Observable<Action> = this.actions$.pipe(
        ofType(FETCHING_LOCATION_ID),
        switchMap((action: any) =>
            this.http
                .getLocationById(action?.payload)
                .pipe(
                    map(locationIdFetchSuccessful),
                    catchError(err => of(fetchError(err)))
                )
         )
    );

    constructor(private actions$: Actions<Action>, private http: RickAndMortyService) {
        console.log("location effects initialized");
    }
}