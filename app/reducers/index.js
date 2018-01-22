import { combineReducers } from 'redux';
import { ProductsReducer } from './products';
import { CartReducer} from './cart';
import { WishlistReducer } from './wishlist';
import { PaginationReducer } from './pagination';
import { FilterReducer } from './filter';
import { StyleReducer } from './style';
import { SortReducer } from './sort'
import { ColorRedReducer, ColorBlueReducer, ColorGreenReducer, ColorYellowReducer, ColorBrownReducer } from './color'

export const reducers = combineReducers({
    products: ProductsReducer,
    cart: CartReducer,
    pagination: PaginationReducer,
    wishlist: WishlistReducer,
    filter: FilterReducer,
    sort: SortReducer,
    style: StyleReducer,
    colorRed: ColorRedReducer,
    colorBlue: ColorBlueReducer,
    colorGreen: ColorGreenReducer,
    colorYellow: ColorYellowReducer,
    colorBrown: ColorBrownReducer
});
