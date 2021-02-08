import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { 
    this.add(this.cartArray); 
  }  
 public total=0;  
 private value; 
 cartArray = [{ "product": "Donut", "price": 10, "quantity":2 }, { "product": "Cake", "price": 100, "quantity":2 }];

  ngOnInit(): void {
  }

  add(cartArray){  
    this.value=cartArray  
    for(let j=0;j<cartArray.length;j++){ 
         this.total+= this.value[j].price*this.value[j].quantity;
         }  
  }  
}
