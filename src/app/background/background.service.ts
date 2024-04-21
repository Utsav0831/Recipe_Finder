import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.edamam.com/search';
  private appId = '8f61c33e';
  private appKey = '0bc7ee91d8fc7d6ea6ccead64c4a48e1';

  constructor(private http: HttpClient) {}

  searchRecipes(item: string): Observable<any> {
    const url = `${this.apiUrl}?q=${item}&app_id=${this.appId}&app_key=${this.appKey}&from=0&to=60`;
    return this.http.get<any>(url);
  }
}
