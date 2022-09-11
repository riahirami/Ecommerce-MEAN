import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CartServiceService } from './services/cart-service.service';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'eCommerce';
categories
  items = [];
  constructor(
    public cartService: CartServiceService,
    private cService : CategoriesService
  ) { }

  listerCategories() {
    this.cService.getAll().subscribe(data => {
      this.categories = data;
        })
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
    if (!this.cartService.itemInCart(item)) {
      item.qtyTotal = 1;
      this.cartService.addToCart(item); //add items in cart
      this.items = [...this.cartService.getItems()];
    }
  }

  ngOnInit(): void {
    this.cartService.loadCart();
    this.items = this.cartService.getItems();
    this.listerCategories() 
  }
}
