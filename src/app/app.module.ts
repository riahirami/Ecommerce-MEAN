import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProduitsComponent } from './component/list-produits/list-produits.component';
import { ListCategoriesComponent } from './component/list-categories/list-categories.component';
import { DetailsProduitsComponent } from './component/details-produits/details-produits.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccueilComponent } from './component/accueil/accueil.component';
import { ProduitParCatComponent } from './component/produit-par-cat/produit-par-cat.component';
import { ProduitsService } from './services/produits.service';
import { CategoriesService } from './services/categories.service';
import { AjouterCategorieComponent } from './component/ajouter-categorie/ajouter-categorie.component';
import { GestionCategoriesComponent } from './component/gestion-categories/gestion-categories.component';
import { EditCategorieComponent } from './component/edit-categorie/edit-categorie.component';
import { AjouterProduitComponent } from './component/ajouter-produit/ajouter-produit.component';
import { EditProduitComponent } from './component/edit-produit/edit-produit.component';
import { CartComponent } from './cart/cart.component';
import { GererproduitsComponent } from './component/gererproduits/gererproduits.component';
import { GerercommandesComponent } from './component/gerercommandes/gerercommandes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProduitsComponent,
    ListCategoriesComponent,
    DetailsProduitsComponent,
    AccueilComponent,
    ProduitParCatComponent,
    AjouterCategorieComponent,
    GestionCategoriesComponent,
    EditCategorieComponent,
    AjouterProduitComponent,
    EditProduitComponent,
    CartComponent,
    GererproduitsComponent,
    GerercommandesComponent
    ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
