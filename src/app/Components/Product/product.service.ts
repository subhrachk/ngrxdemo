import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable({providedIn : 'root'})

export class ProductService {
    constructor(private http : HttpClient) {}

    getAllProduct() {
        return this.http.get<Product[]>('http://localhost:3100/products');
    }

    createProduct(product : Product) {
        return this.http.post('http://localhost:3100/products',product);
    }


}