import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import SETTINGS from '../../app.settings'
import { Item } from '../models/item';
import { Observable } from 'rxjs';

@Injectable()
export class ItemsService {

  constructor(private http: HttpClient) { }

  fetchItems(): Observable<Item[]>{
    return this.http.get<Item[]>(`${SETTINGS.API.URL}/items`)
  }

}
