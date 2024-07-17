import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // name ="stephen ofoegbu"
  addToCart:number = 0;
  product = {
    name: 'iphone 14',
    price: 780,
    color: 'Wine',
    discount: 8.5,
    inStock: 10,
   pImage: '/assets/images/body.jpeg'
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

   onNameChange(event: any){
  //   this.name = (event.target.value);
   }
  decrementCartValue(){
    if(this.addToCart > 0){
    this.addToCart--;
    }
  }
  incrementCartValue(){
    if(this.addToCart < this.product.inStock){
    this.addToCart++;
    }
  }
}
