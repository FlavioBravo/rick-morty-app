import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { fetchingLocationId } from 'src/app/src/core/store/actions/location.actions';
import { AppState } from 'src/app/src/core/store/reducers';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {

  pathImg = 'assets/noimage.png';

  id: any;
  subscriptionLocation!: Subscription;
  location$: any;
  location: any;

  constructor(private route: Router, private router: ActivatedRoute, private store: Store<AppState>) { 
    this.location$ = this.store;
    this.id = this.router.snapshot.paramMap.get('locationId');
    this.subscriptionLocation = this.location$.subscribe((res:any) => {
      if(res.locations?.location?.id){
        this.location = res.locations?.location;
        console.log(this.location)
      }
      
    });
  }

  ngOnInit(): void {
    this.store.dispatch(fetchingLocationId(this.id));
  }

  ngOnDestroy(): void {
    this.subscriptionLocation.unsubscribe();
  }

}
