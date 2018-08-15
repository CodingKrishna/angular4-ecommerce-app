import {Component} from "@angular/core";
import { ProductService } from '../productservice/productserice';
import { Product } from '../productservice/product';
import { SharedService } from '../sharedservice/shared.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'product-list',
    templateUrl: './productlist.component.html'
})
export class ProudctList{
    searchSubscription: Subscription;
    originalProductList: Product[] = [];
    productList: Product[] = [];
    
    constructor(private productService: ProductService, private sharedService: SharedService){
        this.searchSubscription = this.sharedService.searchString$.subscribe(
            searchString =>{ 
                this.filterProductBySearchString(searchString);
            }
        )
    }

    filterProductBySearchString (searchString){
        console.log('filterProductBySearchString ::searchSubscription-->', searchString)
        const filteredList = this.originalProductList.filter((product) => { 
            return product.name.indexOf(searchString) > -1;
        });
        console.log('product list after filter->',filteredList);
        this.productList = filteredList;
    }

    ngOnInit() {
        this.getAllProducts();
     }

     getAllProducts ()  {
        this.productService.getAll()
        .subscribe(products => {
            this.productList = products;
            this.originalProductList = products;
        })
     }
    
     deleteProduct (productId) {
        console.log('deleteProduct>>', productId);
        this.productService.delete(productId).subscribe(res =>{
            console.log('delete res>>', res);
            this.getAllProducts();
        });
     }
}