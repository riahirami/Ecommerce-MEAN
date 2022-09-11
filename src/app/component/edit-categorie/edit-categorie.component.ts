import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Categorie } from '../../model/categorie';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.css']
})
export class EditCategorieComponent implements OnInit {

  id!: number;
  categorie!: Categorie;
  form!: FormGroup;

  constructor(public cService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cService.get(this.id).subscribe((data: Categorie)=>{
      this.categorie = data;
    }); 
       
    this.form = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
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
        this.cService.update(this.id, this.form.value).subscribe((res:Categorie) => {
          console.log('categorie updated successfully!');
          Swal.fire('Saved!', '', 'success')
          this.router.navigateByUrl('gerercategories');
     })
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

    
  }

}
