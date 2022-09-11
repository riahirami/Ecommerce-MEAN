import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/Produit';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { CommandeService } from 'src/app/services/commande.service';
import { ProduitsService } from 'src/app/services/produits.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {
  items = [];

  commande:any
  produits:any
  tabF:Produit[];
  constructor(private pService : ProduitsService,    
              public cartService: CartServiceService,
              public cmdService:CommandeService
    ) { }
    
    ngOnInit(): void {
    this.listerProduits()
    this.refreshList()
    this.cartService.loadCart();
    this.items = this.cartService.getItems();
  }

  listerProduits() {
    this.pService.getAll().subscribe(data => {
      this.produits = data;
     // console.log(data)
        })
  }

  refreshList() {
    this.listerProduits();
  }

  ajouterCommande(commande){
commande.produits=this.items
    this.cmdService.ajoutercommande(commande).subscribe({next: (res) => {
      console.log(commande);
      this.clearCart(this.items)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Commande confirmer',
        showConfirmButton: false,
        timer: 1500
      })
     // this.submitted = true;
    },
    error: (e) => console.error(e)
  });
  
  }
  


   //----- calculate total
   get total() {
    return this.items.reduce(
      (sum, x) => ({
        qtyTotal: 1,
        variationCost: sum.variationCost + x.qtyTotal * x.variationCost
      }),
      { qtyTotal: 1, variationCost: 0 }
    ).variationCost;
  }

  changeSubtotal(item, index) {
    const qty = item.qtyTotal;
    const amt = item.variationCost;
    const subTotal = amt * qty;
    // const subTotal_converted = this.currencyPipe.transform(subTotal, "USD");

    // this.subTotalItems.toArray()[
    //   index
    // ].nativeElement.innerHTML = subTotal_converted;
    this.cartService.saveCart();
  }

  //----- remove specific item
  removeFromCart(item) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
  }

  //----- clear cart item
  clearCart(items) {
    // this.items.forEach((item, index) => this.cartService.removeItem(index));
    this.cartService.clearCart(items);
    this.items = [...this.cartService.getItems()];
  }

  //----- add item to cart
  addToCart(item) {
    
    item.qtyTotal = 1;
    this.cartService.addToCart(item);
      this.items = [...this.cartService.getItems()];

      // console.log("item added "+JSON.stringify(item))
      // console.log("items added "+JSON.stringify(this.items))
    
    console.log("items added "+JSON.stringify(this.items))

  }
}
