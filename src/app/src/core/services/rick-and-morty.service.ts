import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }

  getCharactersList(): Observable<any> {
    return this.http.get<any>(`${environment.rootURL}/character`);
  }

  getCharacterById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.rootURL}/character/${id}`);
  }

  getEpisodesList(): Observable<any> {
    return this.http.get<any>(`${environment.rootURL}/episode`);
  }

  getEpisodeById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.rootURL}/episode/${id}`);
  }

  getLocationsList(): Observable<any> {
    return this.http.get<any>(`${environment.rootURL}/location`);
  }

  getLocationById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.rootURL}/location/${id}`);
  }
}
