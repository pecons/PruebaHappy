import { Component, OnInit } from '@angular/core';
import { CartService } from './core/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  constructor(public cart : CartService){

  }

  ngOnInit(){

  }
}
