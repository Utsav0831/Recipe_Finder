import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:3000/api/recipes';

  constructor(private http: HttpClient) { }

  saveRecipe(recipe: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, recipe);
  }

  getAllRecipes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
