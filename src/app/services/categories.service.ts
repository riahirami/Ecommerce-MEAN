import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl = 'http://localhost:5000/';

  constructor(private http: HttpClient) { }

  getAll():Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.baseUrl+'categories')

  }
  get(id) {
    return this.http.get(this.baseUrl+'categories/' +id);
  }
  create(data):Observable<Categorie> {
    return this.http.post<Categorie>(this.baseUrl+'categories', data);
  }
  update(id, data):Observable<Categorie> {
    return this.http.put<Categorie>(this.baseUrl+"categories/"+id, data);
  }
  delete(id) {
    return this.http.delete(this.baseUrl+"categories/"+id);
  }
  deleteAll() {
    return this.http.delete(this.baseUrl);
  }
  
}
