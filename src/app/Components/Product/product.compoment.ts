import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./product.model";
import { Store } from "@ngrx/store";
import { ProductService } from "./product.service";
import { delete_product, load_product } from "./product.action";
import { getProducts } from "./product.selector";

@Component({
    selector : 'app-product',
    templateUrl : './product.compoment.html'
})

export class ProductCompoment implements OnInit {

    //products$ : Observable<Product[]>
    allproducts : Product[] = [];


    constructor(private store : Store<{products : Product[]}>,
                private prodservice : ProductService
    ) {
            
        //this.products$ = store.select('products');
        this.allproducts = [];
    }

    ngOnInit(): void {
        this.prodservice.getAllProduct().subscribe(
            products => {
                this.store.dispatch(load_product({products: products}));
            });
            
        this.store.select(getProducts).subscribe(allproducts => {this.allproducts = allproducts})
        //this.store.dispatch()
        //console.log('test');
        //this.prodservice.getAllProduct().subscribe(products => this.store.dispatch(load_product({products: products})))
    }

    deleteProduct(id : string) {
        this.store.dispatch(delete_product({id: id}));
    }

}