import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import SETTINGS from '../../app.settings'
import { Item } from '../models/item';
import { Observable } from 'rxjs';
import { UploadService } from './upload.service';
import { map, mapTo, flatMap } from 'rxjs/operators';

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
        flatMap(url => this.http.post(`${SETTINGS.API.URL}/items`, Object.assign(item, { imageUrl: url })))
      )
  }
}
