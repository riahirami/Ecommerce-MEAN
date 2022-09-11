import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/model/Produit';
import { ProduitsService } from 'src/app/services/produits.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-details-produits',
  templateUrl: './details-produits.component.html',
  styleUrls: ['./details-produits.component.css']
})
export class DetailsProduitsComponent implements OnInit {
  constructor(private ar:ActivatedRoute,private router:Router,
    private pService:ProduitsService) { }
   
  ngOnInit() {
   let id=this.ar.snapshot.paramMap.get('id');
   this.rechercher(id)
   
   
  }
  produit:Produit
  rechercher(id)
  {
   this.pService.getProduitById(id).subscribe(data=>this.produit=data)
 
   
  }
  retourner()
  {
   this.router.navigate(['/accueil'])
  }


  updateTutorial(id): void {
    // this.message = '';
    this.pService.update(this.produit._id, this.produit)
      .subscribe({
        next: (res) => {
          console.log(res);
          // this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  delete(id): void {
    Swal.fire({
      title: 'T'+'es sur !',
      text: "Tu veux vraiment supprimer le produit "+this.produit.titre+" ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, effacer le!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.pService.delete(this.produit._id)
      .subscribe({ next: (res) => {            
            this.router.navigate(['/listproduits']);
          },
        error: (e) => console.error(e)
      });

        Swal.fire(
          'Effacer!',
          'Le produit a été effacer.',
          'success',
          )
        }
      })

    

  }

}
