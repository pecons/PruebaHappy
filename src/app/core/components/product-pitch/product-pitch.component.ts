import { Component, Input, OnInit } from '@angular/core';
import { customerReview } from '../../models/customerReview.model';

@Component({
  selector: 'app-product-pitch',
  templateUrl: './product-pitch.component.html',
  styleUrls: ['./product-pitch.component.css']
})
export class ProductPitchComponent implements OnInit {

  @Input() public reviews !: Array<customerReview>;
  @Input() public urlVideo !: string;

  constructor() { }

  ngOnInit(): void {
  }

}
