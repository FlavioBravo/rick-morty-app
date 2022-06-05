import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { fetchingEpisodeId } from 'src/app/src/core/store/actions/episode.actions';
import { fetchingLocationId } from 'src/app/src/core/store/actions/location.actions';
import { AppState } from 'src/app/src/core/store/reducers';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css']
})
export class EpisodeDetailComponent implements OnInit {

  pathImg = 'assets/noimage.png';
  id: any;
  subscriptionEpisode!: Subscription;
  episode$: any;
  episode: any;

  constructor(private route: Router, private router: ActivatedRoute, private store: Store<AppState>) { 
    this.episode = this.router.snapshot.paramMap.get('episodeId');

    this.episode$ = this.store;
    this.id = this.router.snapshot.paramMap.get('episodeId');
    this.subscriptionEpisode = this.episode$.subscribe((res:any) => {
      if(res.episodes?.episode?.id){
       this.episode = res.episodes?.episode;
       console.log(this.episode)
      }
      
    });
  }

  ngOnInit(): void {
    this.store.dispatch(fetchingEpisodeId(this.id));
  }

  ngOnDestroy(): void {
    this.subscriptionEpisode.unsubscribe();
  }

}
