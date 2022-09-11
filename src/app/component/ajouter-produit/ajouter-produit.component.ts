import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProduitsService } from 'src/app/services/produits.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {

  produitForm: FormGroup;
  constructor(private pService: ProduitsService,private cService : CategoriesService,private router: Router)
   {}
  
   submitted = false;
   listcategories:Categorie[]

  ngOnInit(): void {
    this.listerCategories()
    this.produitForm = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      prix: new FormControl('', Validators.required),
      quantite: new FormControl('', Validators.required),
      couleur: new FormControl('', Validators.required),
      categories: new FormControl(''),
      categoriesid: new FormControl(''),
      produitImage: new FormControl('')
    });

    console.log(this.produitForm)

  }

  get f(){
    return this.produitForm.controls;
  }

  listerCategories() {
    this.cService.getAll().subscribe(data => {
      this.listcategories = data;
        })
  }
  img:File
  imageSrc: string = '';
  selectImage(event)
  {
    this.imageSrc=event.target.files[0].name
    console.log("this.produitImage > "+this.imageSrc)
    this.produitForm.patchValue({produitImage:this.imageSrc });   
  }


  onProduitsubmit() {

    this.pService.create(this.produitForm.value)
    
      .subscribe({
        next: (res) => {
          console.log(res);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Produit ajouter',
            showConfirmButton: false,
            timer: 1500
          })
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

}
