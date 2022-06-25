import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {  Gif, SearchGigsResponce } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsServicesService {


  private apiKey: string = '5hqbNEWVysQ2UebT7pjguNjLY3FDdWc9';

  private _history: string[] = [];

  private serviceURL: string = 'https://api.giphy.com/v1/gifs'

  public results: Gif[] = [];

  get History(): string[] {
    return [...this._history];
  }

  constructor(private http:HttpClient) {
    const history = localStorage.getItem('history');
    const results = localStorage.getItem('results');
    if (history && results) {
      this._history = JSON.parse(history);
      this.results = JSON.parse(results);
    }
   }

  searchGifs(query: string) {

    query = query.trim().toLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.slice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }


    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query)

    this.http.get<SearchGigsResponce>(`${this.serviceURL}/search`, {params})
    .subscribe(
      (res) =>{
        this.results = res.data;
        localStorage.setItem('results', JSON.stringify(this.results));
      }
    )

  }
}
