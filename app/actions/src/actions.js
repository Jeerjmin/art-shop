export const onFind = (value) => ({
  type:'FIND',
  payload:value
});


export const addToCart = product => ({
    type: 'ADD_TO_CART',
    payload: product
});


export const addToWishlist = productId => ({
    type: 'ADD_TO_WISHLIST',
    payload: productId
});

/**
 * go to next page
 *
 * @name nextPage
 * @function
 * @returns {Object} action
 */
export const nextPage = () => ({
    type: 'NEXT_PAGE'
});

/**
 * go to previous page
 *
 * @name previousPage
 * @function
 * @returns {Object} action
 */
export const previousPage = () => ({
    type: 'PREVIOUS_PAGE'
});

/**
 * go to page
 *
 * @name goToPage
 * @function
 * @param {Number} page page id
 * @returns {Object} action
 */
export const goToPage = (page) => ({
    type: 'GO_TO_PAGE',
    payload: page
});
