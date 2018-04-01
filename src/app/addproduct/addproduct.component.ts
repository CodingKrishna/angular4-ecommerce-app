import {Component} from '@angular/core';
import { ProductService } from '../productservice/productserice';
import { Product } from '../productservice/product';

@Component({
    selector: 'add-product',
    templateUrl:'./addproudct.component.html'
})
export class AddProudct {
    constructor(private productService: ProductService){}
    
    product: Product

    handleAddProduct (productObj) {
        this.product = {"id": productObj.id, "name": productObj.name, 
            "price": productObj.price, "description": productObj.description};
        console.log('add product ',this.product);
        this.productService.create(this.product)
        .subscribe(res => console.log(res));
    }

}