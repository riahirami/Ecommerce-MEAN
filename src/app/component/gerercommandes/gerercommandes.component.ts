import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommandeService } from '../../services/commande.service';

@Component({
  selector: 'app-gerercommandes',
  templateUrl: './gerercommandes.component.html',
  styleUrls: ['./gerercommandes.component.css']
})
export class GerercommandesComponent implements OnInit {

  commandes:any
  constructor(public cmdService:CommandeService,private router:Router) { }

  ngOnInit(): void {
    this.listerCommandes()
  }
  listerCommandes() {
    this.cmdService.getAll().subscribe(data => {
      this.commandes = data;
      console.log(data)
        })
  }
  annuler(id){

    Swal.fire({
      title: 'T'+' es sur !',
      text: "Tu veux vraiment annuler cette commande  ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, confirmer !'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cmdService.annulercommande(id).subscribe(data=>{
          console.log(data.statut)
        })

        Swal.fire(
          'Annuler!',
          'La commande a été annuler.',
          'success',
          )
          this.router.navigate(['/gerercommandes']);
        }

      })

  }

  valider(id){ 

    Swal.fire({
      title: 'T'+'es sur !',
      text: "Tu veux vraiment valider cette commande  ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, confirmer !'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cmdService.validercommande(id).subscribe(data=>{
          console.log(data.statut)
        })

        Swal.fire(
          'Valider!',
          'La commande a été valider.',
          'success',
          )
        }
        this.router.navigate(['gerercommandes']);

      })

  }

}
