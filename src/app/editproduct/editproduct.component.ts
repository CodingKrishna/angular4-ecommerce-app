import { Component} from '@angular/core';
import { ProductService } from '../productservice/productserice';
import { Product } from '../productservice/product';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
    selector: 'edit-product',
    templateUrl:'./editproduct.component.html'
})
export class EditProudct {

    constructor(private route: ActivatedRoute,
        private formBuilder: FormBuilder, private productService: ProductService){
    }
    product: Product = {id:'' ,name: '', price: 0, description: ''};

    ngOnInit () {
        let id = parseInt(this.route.snapshot.paramMap.get('id'));
        console.log('EditProudct Id>>', id);
        this.productService.getById(id).subscribe(
            res => { 
                console.log('res>>', res);
                this.product = res; 
            }
        );
    }

    handleEditProduct (productObj) {
        console.log('[HK] edit product obj >>', productObj); 
        console.log('[HK] edit product ',this.product);
        this.productService.update(this.product)
        .subscribe(res => console.log(res));
    }

    /*
    productp: Observable<Product>;
     editForm: FormGroup;
    
  this.editForm = this.formBuilder.group({
            id: [''],
            name: ['',],
            price: [''],
            description: []
        });

        this.productp = this.productService.getById(id).pipe(
            tap(productp => this.editForm.patchValue(productp))
          );

    */
}