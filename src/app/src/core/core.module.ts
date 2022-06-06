import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { RickAndMortyService } from './services/rick-and-morty.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { actionReducerMap } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CoreComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(actionReducerMap),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    })
  ],
  providers: [
    RickAndMortyService
  ],
  exports: [
    SearchComponent
  ]
})
export class CoreModule { }
