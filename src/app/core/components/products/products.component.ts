import { Component, Input, OnInit } from '@angular/core';
import { products } from '../../models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() public products !: Array<products>;

  constructor() { }

  ngOnInit(): void {
  }

}
