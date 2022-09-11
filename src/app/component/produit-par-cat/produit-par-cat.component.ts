import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/model/Produit';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-produit-par-cat',
  templateUrl: './produit-par-cat.component.html',
  styleUrls: ['./produit-par-cat.component.css']
})
export class ProduitParCatComponent implements OnInit {

  constructor(private ar:ActivatedRoute,private router:Router,private pService:ProduitsService ) { }

  ngOnInit(): void {
    let id=this.ar.snapshot.paramMap.get('id');
   this.rechercher(id)
  }

  produit:Produit[]
  rechercher(id)
  {
   this.pService.getProduitByCategorie(id).subscribe(data=>this.produit=data)
  }

  retourner()
  {
   this.router.navigate(['/accueil'])
  }
}
