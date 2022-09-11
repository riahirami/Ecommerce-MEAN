import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './component/accueil/accueil.component';
import { AjouterCategorieComponent } from './component/ajouter-categorie/ajouter-categorie.component';
import { AjouterProduitComponent } from './component/ajouter-produit/ajouter-produit.component';
import { DetailsProduitsComponent } from './component/details-produits/details-produits.component';
import { ListCategoriesComponent } from './component/list-categories/list-categories.component';
import { ListProduitsComponent } from './component/list-produits/list-produits.component';
import { ProduitParCatComponent } from './component/produit-par-cat/produit-par-cat.component';
import { EditCategorieComponent } from './component/edit-categorie/edit-categorie.component';
import { EditProduitComponent } from './component/edit-produit/edit-produit.component';
import { GerercommandesComponent } from './component/gerercommandes/gerercommandes.component';
import { GererproduitsComponent } from './component/gererproduits/gererproduits.component';
import { GestionCategoriesComponent } from './component/gestion-categories/gestion-categories.component';

const routes: Routes = [

  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  
  { path: 'accueil', component: AccueilComponent },
  { path: 'listproduits', component: ListProduitsComponent },
  { path: "detailsproduits/:id", component: DetailsProduitsComponent },
  { path: 'listcategories', component: ListCategoriesComponent },
  { path: 'cat/:id', component: ProduitParCatComponent },
  { path: 'ajoutercategorie', component: AjouterCategorieComponent },
  { path: 'gerercategories', component: GestionCategoriesComponent },
  { path: 'editercategorie/:id', component: EditCategorieComponent },
  { path: 'editerproduit/:id', component: EditProduitComponent },
  { path: 'ajouterproduit', component: AjouterProduitComponent },
  { path: 'gererproduits', component: GererproduitsComponent },
  { path: 'gerercommandes', component: GerercommandesComponent },
 // { path:"produit/:id",component:DetailsProduitsComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
