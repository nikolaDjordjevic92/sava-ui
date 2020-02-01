import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class PopularDomainsService {

  constructor(private http: HttpClient) { }

  findPopularDomains(): Promise<any> {
    return this.http.get(`${environment.host}/popular-domains`).toPromise();
  }
}
