import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from '../model/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  baseUrl = 'http://localhost:5000/commandes';

  constructor(private http:HttpClient) { }

  getAll():Observable<Commande> {
    return this.http.get<Commande>(this.baseUrl)

  }
  ajoutercommande(data):Observable<Commande> {
    return this.http.post<Commande>(this.baseUrl,data)
  }

  validercommande(id):Observable<Commande>{
    return this.http.put<Commande>(this.baseUrl+"/valider/"+id,"")
  }

  annulercommande(id):Observable<Commande>{
    return this.http.put<Commande>(this.baseUrl+"/annuler/"+id,"")
  }
}
