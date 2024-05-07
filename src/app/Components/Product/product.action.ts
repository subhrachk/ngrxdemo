import { createAction, props } from "@ngrx/store";
import { Product } from "./product.model";

export const load_product = createAction('load product',props<{products : Product[]}>());
export const create_product = createAction('create product',props<{product : Product}>());
export const update_product = createAction('update product',props<{product : Product}>());
export const delete_product = createAction('delete product',props<{id : string}>());