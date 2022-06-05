import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { LocationDetailComponent } from './pages/location-detail/location-detail.component';
import { LocationListComponent } from './pages/location-list/location-list.component';
import { CoreModule } from '../core/core.module';
import { LocationEffects } from '../core/store/effects/location.effect';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    LocationComponent,
    LocationDetailComponent,
    LocationListComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    CoreModule,
    EffectsModule.forFeature([LocationEffects]),
  ]
})
export class LocationModule { }
