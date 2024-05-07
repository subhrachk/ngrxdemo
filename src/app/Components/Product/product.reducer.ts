import { createReducer, on } from "@ngrx/store";
import { Product } from "./product.model";
import { create_product, delete_product, load_product } from "./product.action";

export const initialState : Product[] = [];

export const productReducer = createReducer(
    initialState,
    on(load_product,(state,action)=>action.products), 
    on(create_product,(state,action) =>
    {
        const prod : Product = {...action.product};
        console.log(prod);
        return [...state,{...prod}]
    }), 
    on(delete_product,(state,action) =>
    {
        const products : Product[] = [...state].filter(x => x._id !== action.id);
        //console.log(prod);
        return products;
    })
)