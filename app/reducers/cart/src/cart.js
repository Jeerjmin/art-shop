/**
 * default state
 */
const defaultState = {
    total: 0,
    products: [],
    cartTitle:[],
    cartSubTitle: [],
    cartImage:[],
    cartPrice: []
};

/**
 * add to cart
 * if the product is alrady in cart, we remove it
 *
 * @name addToCart
 * @function
 * @param {Object} state state
 * @param {Object} action action
 * @returns {Object} new state
 */
const addToCart = (state, action) => {
    const index = parseInt(state.products.findIndex((id) => id === action.payload.id),10);
    const price = action.payload.priceDiscounted ? action.payload.priceDiscounted : action.payload.price;

    if (index === -1) {
        // add to cart
        return {
            total: state.total + Number(price),
            products: state.products.concat(action.payload.id),
            cartTitle: state.cartTitle.concat(action.payload.title),
            cartSubTitle: state.cartSubTitle.concat(action.payload.subtitle),
            cartImage: state.cartImage.concat(action.payload.image),
            cartPrice: state.cartPrice.concat(action.payload.price)
        };
    }

    // remove from cart
    return {
        total: state.total - Number(price),
        products: state.products.filter((product) => product !== state.products[index]),
        cartTitle: state.cartTitle.filter((title) => title !== state.cartTitle[index]),
        cartSubTitle: state.cartSubTitle.filter((subtitle) => subtitle !== state.cartSubTitle[index]),
        cartImage: state.cartImage.filter((image) => image !== state.cartImage[index]),
        cartPrice: state.cartPrice.filter((price) => price !== state.cartPrice[index])
    };
}


const deleteFromCart = (state, action) => {


  return {
    products: state.products.filter((product) => product !== state.products[action.payload]),
    cartTitle: state.cartTitle.filter((title) => title !== state.cartTitle[action.payload]),
    cartSubTitle: state.cartSubTitle.filter((subtitle) => subtitle !== state.cartSubTitle[action.payload]),
    cartImage: state.cartImage.filter((image) => image !== state.cartImage[action.payload]),
    cartPrice: state.cartPrice.filter((price) => price !== state.cartPrice[action.payload]),
    total: state.total - Number(state.cartPrice[action.payload])
  };


}



export const CartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': return addToCart(state, action);
        case 'DELETE_FROM_CART':return deleteFromCart(state,action);
    }
    return state;
};
