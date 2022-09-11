import { Categorie } from "./categorie";

export interface Produit {

    _id:number;
    titre:string;
    prix:number;
    quantite:number;
    description:string;
    produitImage:string;
    couleur:string;
    // categories:{
    //     _id:string,
    //     titre:string,
    //     description:string
    // },
    categories:Categorie

}
