import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items = [];

  constructor() { }
  addToCart(addedItem) {
    this.items.push(addedItem);
    this.saveCart();
   // console.log("add to cart "+JSON.stringify(addedItem))
  }

  getItems() {
    return this.items;
  } 

  loadCart(): void {
    this.items = JSON.parse(localStorage.getItem("cart_items")) ?? [];
  }

  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.items)); 
  }

  clearCart(items) {
    this.items = [];

    localStorage.removeItem("cart_items")
  }

  removeItem(item) {
    const index = this.items.findIndex(o => o.id === item.id);

    if (index > -1) {
      this.items.splice(index, 1);
      this.saveCart();
    }
  }

  itemInCart(item): boolean {
    return this.items.findIndex(o => o.id === item.id) > -1;
  }
}
