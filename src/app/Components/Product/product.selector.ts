import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "./product.model";


const getFeatureProduct = createFeatureSelector<Product[]>('products');

export const getProducts =  createSelector(getFeatureProduct,(state)=>state);