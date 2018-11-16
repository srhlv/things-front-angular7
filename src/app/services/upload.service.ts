import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import SETTINGS from '../../app.settings'
import { Item } from '../models/item';
import { Observable } from 'rxjs';
import { map, switchMap, mapTo } from 'rxjs/operators';

@Injectable()
export class UploadService {

    constructor(private http: HttpClient) { }

    uploadImage(file: File): Observable<any> {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', SETTINGS.CLOUDINARY.UPLOAD_PRESET);

        return this.http.post(SETTINGS.CLOUDINARY.URL, formData).pipe(map((result: any) => result.url))
    }
}

/* 
uploadAndProgress(files: File[]){
    console.log(files)
    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('file',f))
    
    this.http.post('https://file.io', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
    });
  }
*/