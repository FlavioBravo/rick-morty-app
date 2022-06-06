import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { fetchingEpisodes } from 'src/app/src/core/store/actions/episode.actions';
import { AppState } from 'src/app/src/core/store/reducers';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {

  episodes$;
  subscriptionEpisode!: Subscription;
  episodesList!: Array<any>;
  currentList!: Array<any>;

  constructor(private store: Store<AppState>, private route: Router) { 
    this.episodes$ = this.store;
    this.episodesList = [];
    this.currentList = [];
    this.subscriptionEpisode = this.episodes$.subscribe(res => {
      if(res?.episodes?.episodesList?.length > 2) {
        this.episodesList.push(...res.episodes.episodesList);
        this.currentList.push(...res.episodes.episodesList);
      }
    });
  }

  ngOnInit(): void {
    this.store.dispatch(fetchingEpisodes());
  }

  redirect(id: any){
    this.route.navigate([`episode/detail/${id}`]);
  }

  receiveSearchList($event: any) {
    this.currentList = [...$event];
  }

  ngOnDestroy(): void {
    this.subscriptionEpisode.unsubscribe();
  }

}
