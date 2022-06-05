import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'character', loadChildren: () => import('./src/character/character.module').then(m => m.CharacterModule) },
  { path: 'location', loadChildren: () => import('./src/location/location.module').then(m => m.LocationModule) },
  { path: 'episode', loadChildren: () => import('./src/episode/episode.module').then(m => m.EpisodeModule) },
  { path: '', loadChildren: () => import('./src/core/core.module').then(m => m.CoreModule) },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
