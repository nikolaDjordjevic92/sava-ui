import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  createShorterUrl(url) {
    const body = {
      url
    };
    return this.http.post(`${environment.host}/generate-short-url`, body).toPromise();
  }

  extractUrl(url) {
    if (url.includes('/')) {
      url = url.substring(url.lastIndexOf('/') + 1);
    }
    return this.http.get(`${environment.host}/extract-url/${url}`).toPromise();
  }
}
