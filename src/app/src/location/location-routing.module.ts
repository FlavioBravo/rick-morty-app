import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location.component';
import { LocationDetailComponent } from './pages/location-detail/location-detail.component';
import { LocationListComponent } from './pages/location-list/location-list.component';

const routes: Routes = [
  { path: '', component: LocationListComponent },
  { path: 'detail/:locationId', component: LocationDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
