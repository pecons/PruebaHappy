import { Component, Input, OnInit } from '@angular/core';
import { descProduct } from '../../models/descProduct.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-desc-and-prices',
  templateUrl: './desc-and-prices.component.html',
  styleUrls: ['./desc-and-prices.component.css']
})
export class DescAndPricesComponent implements OnInit {

  @Input() public title!: string;
  @Input() public desc!: string;
  @Input() public details!: descProduct;
  @Input() public sponsorLogos !: Array<string>;

  constructor(
    public cart : CartService
  ) { }

  ngOnInit(): void {

    if(this.title === undefined){
      this.title='SubTitulo';
    }
    if(this.desc === undefined){
      this.desc='Descripción.';
    }
    if(this.details === undefined){
      this.details={price:'price',
                    duration:'duration',
                    billingType:'billing type',
                    contractType:'contract type'};
    }

  }

}
