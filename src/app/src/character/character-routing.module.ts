import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { CharacterListComponent } from './pages/character-list/character-list.component';

const routes: Routes = [
  { path: '', component: CharacterListComponent },
  { path: 'detail/:characterId', component: CharacterDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
