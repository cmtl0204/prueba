import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Pokemon} from '../models/pokemon';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http: HttpClient) {

  }

  getPokemons(): Observable<Pokemon[]> {
    const url = environment.API_URL;
    return this.http.get(url).pipe(map(response => {
      return response['results'];
    })) as Observable<Pokemon[]>;
  }

  getPokemon(name): Observable<Pokemon> {
    const url = environment.API_URL + name;
    return this.http.get(url)
      .pipe(map(response => {

        return {
          id: response['id'],
          name: response['name'],
          abilities: response['abilities'],
          base_experience: response['base_experience'],
          height: response['height'],
          weight: response['weight'],
          order: response['order'],
          url: response['url'],
          sprites: response['sprites'],
        };
      })) as Observable<Pokemon>;
  }

}
