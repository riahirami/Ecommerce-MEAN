import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Categorie } from '../../model/categorie';
import { Produit } from '../../model/Produit';
import { CategoriesService } from '../../services/categories.service';
import { ProduitsService } from '../../services/produits.service';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {

  id!: number;
  produit!: Produit;
  editproduitForm!: FormGroup;

  constructor(public pService: ProduitsService,
    private route: ActivatedRoute,
    private router: Router,
    public cService:CategoriesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.pService.get(this.id).subscribe((data: Produit)=>{
      this.produit = data;
    }); 
       
    this.editproduitForm = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      prix: new FormControl('', Validators.required),
      quantite: new FormControl('', Validators.required),
      couleur: new FormControl('', Validators.required),
      categories: new FormControl(''),
      categoriesid: new FormControl(''),
      produitImage: new FormControl('')
    });
  }

  listcategories:any
  listerCategories() {
    this.cService.getAll().subscribe(data => {
      this.listcategories = data;
        })
  }
  get f(){
    return this.editproduitForm.controls;
  }

  img:File
  imageSrc: string = '';
  selectImage(event)
  {
    this.imageSrc=event.target.files[0].name
    console.log("this.produitImage > "+this.imageSrc)
    this.editproduitForm.patchValue({produitImage:this.imageSrc });   
  }

  submit(){

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.pService.update(this.id, this.editproduitForm.value).subscribe((res:Categorie) => {
          console.log('produits updated successfully!');
          Swal.fire('Saved!', '', 'success')
          this.router.navigate(['/listproduits']);

        })
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

    
  }

}
