import { combineReducers } from 'redux';
import { ProductsReducer } from './products';
import { CartReducer } from './cart';
import { WishlistReducer } from './wishlist';
import { PaginationReducer } from './pagination';
import { FilterReducer } from './filter'


export const reducers = combineReducers({
    products: ProductsReducer,
    cart: CartReducer,
    pagination: PaginationReducer,
    wishlist: WishlistReducer,
    filter: FilterReducer
});
