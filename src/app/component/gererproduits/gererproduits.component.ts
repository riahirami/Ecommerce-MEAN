import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Produit } from '../../model/Produit';
import { ProduitsService } from '../../services/produits.service';

@Component({
  selector: 'app-gererproduits',
  templateUrl: './gererproduits.component.html',
  styleUrls: ['./gererproduits.component.css']
})
export class GererproduitsComponent implements OnInit {
  
  produits: any;
  router: any;
  

  constructor(private pService: ProduitsService,private ar: ActivatedRoute ) {}

  ngOnInit(): void {
    this.listerProduits()
  }

  listerProduits() {
    this.pService.getAll().subscribe(data => {
      this.produits = data;
        })
  }

  supprimer(id){
    Swal.fire({
      title: 'T'+'es sur !',
      text: "Tu veux vraiment supprimer le produits "+this.produits.titre+" ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, confirmer !'
    }).then((result) => {
      if (result.isConfirmed) {
        this.pService.delete(id)
      .subscribe({ next: (res) => {            
            this.router.navigate(['/gererproduits']);
          },
        error: (e) => console.error(e)
      });

        Swal.fire(
          'Effacer!',
          'Le proauit a été effacer.',
          'success',
          )
        }

      })
 

}
}
