export const Descending = value => ({
  type: "SORT_DESCENDING",
  payload: value
})

export const Ascending = value => ({
  type: "SORT_ASCENDING",
  payload: value
})

export const FindRed = (value) => ({
  type:"FIND_RED",
  payload:value
});

export const FindBlue = (value) => ({
  type:"FIND_BLUE",
  payload: value
});

export const FindGreen = (value) => ({
  type:"FIND_GREEN",
  payload: value
});

export const FindYellow = (value) => ({
  type:"FIND_YELLOW",
  payload: value
});

export const FindBrown = (value) => ({
  type:"FIND_BROWN",
  payload: value
});


export const FindStyle = (value) => ({
  type:"FIND_STYLE",
  payload:value
});

export const onFind = (value) => ({
  type:'FIND',
  payload:value
});


export const addToCart = product => ({
    type: 'ADD_TO_CART',
    payload: product
});

export const deleteFromCart = value => ({
    type: 'DELETE_FROM_CART',
    payload: value
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
