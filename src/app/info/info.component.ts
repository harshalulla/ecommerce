import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  productArray = [{ "product": "Cake", "price": 10, "quantity":2, "exprice" : 8 }];

  ngOnInit(): void {
  }

}
