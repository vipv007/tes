import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
    private apiUrl = 'https://celescontainerwebapp-server.mongo.cosmos.azure.com:443/items';


  constructor(private http: HttpClient) {}

  getItems(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addItem(item: any): Observable<any> {
    return this.http.post(this.apiUrl, item);
  }
}
