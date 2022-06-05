import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { fetchingLocations } from 'src/app/src/core/store/actions/location.actions';
import { AppState } from 'src/app/src/core/store/reducers';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  locations$;
  subscriptionLocation!: Subscription;
  locationsList!: Array<any>;

  constructor(private store: Store<AppState>, private route: Router) { 
    this.locations$ = this.store;
    this.locationsList = [];
    this.subscriptionLocation = this.locations$.subscribe(res => {
      if(res?.locations?.locationsList?.length > 2) {
        this.locationsList.push(...res.locations.locationsList)
      }
    });
  }

  ngOnInit(): void {
    this.store.dispatch(fetchingLocations());
  }

  redirect(id: any){
    this.route.navigate([`location/detail/${id}`]);
  }

  ngOnDestroy(): void {
    this.subscriptionLocation.unsubscribe();
  }

}
