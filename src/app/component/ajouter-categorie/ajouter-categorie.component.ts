import { Component, NgModule, NgZone, OnInit } from '@angular/core';
import { Categorie } from 'src/app/model/categorie';
import { CategoriesService } from 'src/app/services/categories.service';
import { Route, Router } from '@angular/router';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.css']

})

export class AjouterCategorieComponent implements OnInit {

  categorieForm: FormGroup;
  constructor(private cService: CategoriesService,private router: Router)
   {}
  
   submitted = false;

  ngOnInit(): void {
    this.categorieForm = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.categorieForm.controls;
  }
  

  onCategoriesubmit() {
    console.warn("onCategoriesubmit");
    this.cService.create(this.categorieForm.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Categorie ajouter',
            showConfirmButton: false,
            timer: 1500
          })
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

 


}
