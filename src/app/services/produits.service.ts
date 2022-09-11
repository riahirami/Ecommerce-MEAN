import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../model/Produit';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

   baseUrl = 'http://localhost:5000/';

  constructor(private http: HttpClient) { }

  get(id) {
    return this.http.get(this.baseUrl+'produits/' +id);
  }
  getAll():Observable<Produit[]> {
    return this.http.get<Produit[]>(this.baseUrl+'produits')

  }
  getProduitById(id):Observable<Produit>  {
    return this.http.get<Produit>(this.baseUrl+'produits/' +id);
  }
  
  getProduitByCategorie(id):Observable<Produit[]>  {
    return this.http.get<Produit[]>(this.baseUrl+'produits/cat/' +id);
  }

  create(data):Observable<Produit>  {
    return this.http.post<Produit>(this.baseUrl+'produits', data);
  }
  update(id, data) :Observable<Produit> {
    return this.http.put<Produit>(this.baseUrl+"produits/"+id, data);
  }
  delete(id) {
    return this.http.delete(this.baseUrl+'produits/'+id);
  }
  deleteAll() {
    return this.http.delete(this.baseUrl);
  }
  
}
