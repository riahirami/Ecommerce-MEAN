import { Produit } from "./Produit";

export interface Commande {

    _id:number;
    userId:string;
    montant:string;
    statut:string;
    produits:Produit[]

}
