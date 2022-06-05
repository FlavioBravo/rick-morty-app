import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodeComponent } from './episode.component';
import { EpisodeListComponent } from './pages/episode-list/episode-list.component';
import { EpisodeDetailComponent } from './pages/episode-detail/episode-detail.component';
import { EffectsModule } from '@ngrx/effects';
import { EpisodeEffects } from '../core/store/effects/episode.effects';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    EpisodeComponent,
    EpisodeListComponent,
    EpisodeDetailComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    CoreModule,
    EffectsModule.forFeature([EpisodeEffects]),
  ]
})
export class EpisodeModule { }
