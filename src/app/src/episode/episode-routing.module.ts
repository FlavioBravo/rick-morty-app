import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeDetailComponent } from './pages/episode-detail/episode-detail.component';
import { EpisodeListComponent } from './pages/episode-list/episode-list.component';

const routes: Routes = [
  { path: '', component: EpisodeListComponent },
  { path: 'detail/:episodeId', component: EpisodeDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeRoutingModule { }
