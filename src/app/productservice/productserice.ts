import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

@Injectable()
export class ProductService {
    constructor(private http: HttpClient) { }
 
    getAll() {
        return this.http.get<Product[]>('http://localhost:3000/products');
    }
 
    getById(id: number) {
        return this.http.get<Product>('http://localhost:3000/products/' + id);
    }
 
    create(product: Product) {
        console.log('create service -->',product);
        return this.http.post('http://localhost:3000/products/', product, httpOptions);
    }
 
    update(product: Product) {
        return this.http.put('http://localhost:3000/product/' + product.id, product);
    }
 
    delete(id: number) {
        return this.http.delete('http://localhost:3000/products/' + id);
    }
}