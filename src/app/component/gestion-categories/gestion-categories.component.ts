import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-gestion-categories',
  templateUrl: './gestion-categories.component.html',
  styleUrls: ['./gestion-categories.component.css']
})
export class GestionCategoriesComponent implements OnInit {
  categories:any

  constructor(private ar:ActivatedRoute,private cService : CategoriesService,private router:Router) { }

  ngOnInit(): void {
    this.listerCategories()
  }

  listerCategories() {
    this.cService.getAll().subscribe(data => {
      this.categories = data;
        })
  }

  supprimer(id){
    Swal.fire({
      title: 'T'+'es sur !',
      text: "Tu veux vraiment supprimer le categorie "+this.categories.titre+" ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, confirmer !'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cService.delete(id)
      .subscribe({ next: (res) => {            
            this.router.navigate(['/gerercategories']);
          },
        error: (e) => console.error(e)
      });

        Swal.fire(
          'Effacer!',
          'Le categorie a été effacer.',
          'success',
          )
        }

      })
 

}
}
