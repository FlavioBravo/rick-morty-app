import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/src/core/store/reducers';
import { fetchingCharacters } from '../../../core/store/actions/character.actions';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters$;
  subscriptionCharacter!: Subscription;
  charactersList!: Array<any>;
  currentList!: Array<any>;

  constructor(private store: Store<AppState>, private route: Router) { 
    this.characters$ = this.store;
    this.charactersList = [];
    this.currentList = [];
    this.subscriptionCharacter = this.characters$.subscribe(res => {
      if(res?.characters?.characterslist?.length > 2) {
        this.charactersList.push(...res.characters.characterslist);
        this.currentList.push(...res.characters.characterslist);
      }
    });
  }

  ngOnInit(): void {
    this.store.dispatch(fetchingCharacters());
  }

  redirect(id: any){
    this.route.navigate([`character/detail/${id}`]);
  }

  receiveSearchList($event: any) {
    this.currentList = [...$event];
  }

  ngOnDestroy(): void {
    this.subscriptionCharacter.unsubscribe();
  }

}
