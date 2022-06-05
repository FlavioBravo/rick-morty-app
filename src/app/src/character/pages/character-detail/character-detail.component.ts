import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { fetchingCharacterId } from 'src/app/src/core/store/actions/character.actions';
import { AppState } from 'src/app/src/core/store/reducers';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  id: any;
  subscriptionCharacter!: Subscription;
  character$: any;
  character: any;

  constructor(private route: Router, private router: ActivatedRoute, private store: Store<AppState>) { 
    this.character$ = this.store;
    this.id = this.router.snapshot.paramMap.get('characterId');
    this.subscriptionCharacter = this.character$.subscribe((res:any) => {
      if(res.characters?.character?.id) {
        this.character = res.characters?.character;
      }
      
    });
  }

  ngOnInit(): void {
    this.store.dispatch(fetchingCharacterId(this.id));
  }

  ngOnDestroy(): void {
    this.subscriptionCharacter.unsubscribe();
  }

}
