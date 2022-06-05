import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import { CharacterRoutingModule } from './character-routing.module';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { CoreModule } from '../core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { CharacterEffects } from '../core/store/effects/character.effect';



@NgModule({
  declarations: [
    CharacterComponent,
    CharacterListComponent,
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    CoreModule,
    EffectsModule.forFeature([CharacterEffects]),
  ]
})
export class CharacterModule { }
