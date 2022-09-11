import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/model/Produit';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  categories:any

  constructor(private ar:ActivatedRoute,private cService : CategoriesService,private pService : ProduitsService) { }

  ngOnInit(): void {
    this.listerCategories()
    let id=this.ar.snapshot.paramMap.get('id');
   this.rechercher(id)
  }

  listerCategories() {
    this.cService.getAll().subscribe(data => {
      this.categories = data;
        })
  }

  produit:Produit[]
  rechercher(id)
  {
   this.pService.getProduitByCategorie(id).subscribe(data=>this.produit=data)
 
   
  }
}
