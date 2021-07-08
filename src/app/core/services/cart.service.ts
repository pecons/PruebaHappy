import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CartService {

    private _cartItems
    constructor() {         
        this._cartItems=this.checkLocalStorage();
    }

    public checkLocalStorage() :number{
        if(localStorage.getItem('_cartItems') != null){
            const currentValue =  JSON.parse(localStorage.getItem('_cartItems') || '{}');          
            return parseInt(currentValue);            
        }else{
            return 0;
        }        
    }

    public getcartItems() :number {        
            return this._cartItems;                
    }

    public addItemToCart() {
        this._cartItems += 1;
        localStorage.setItem('_cartItems', JSON.stringify(this._cartItems));
    }
}