import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Product } from "../product.model";
import { create_product, load_product } from "../product.action";

@Component({
    selector: 'app-create-product',
    templateUrl : './createproduct.component.html'
})


export class CreateProductComponent {

    constructor(private store : Store<{product : Product}>) {}

createProduct(f:NgForm) {
    const product : Product = {_id: '', name : f.value.name, price : f.value.price};
    this.store.dispatch(create_product({product : product}));
    //console.log(f);
}
    
}