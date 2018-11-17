import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import SETTINGS from '../../app.settings'
import { Item } from '../models/item';
import { Observable } from 'rxjs';
import { UploadService } from './upload.service';
import { flatMap, switchMap } from 'rxjs/operators';

@Injectable()
export class ItemsService {

  constructor(private http: HttpClient, private uploadService: UploadService) { }

  fetchItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${SETTINGS.API.URL}/items`)
  }

  createItem(item: Item, image: File) {
    return this.uploadService
      .uploadImage(image)
      .pipe(
        switchMap(url => this.http.post(`${SETTINGS.API.URL}/items`, { ...item, imageUrl: url }))
      )
  }

  deleteItem(item: Item){
    return this.http.delete(`${SETTINGS.API.URL}/items/${item.id}`)
  }
}

