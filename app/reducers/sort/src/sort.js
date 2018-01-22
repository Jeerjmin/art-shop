import products from '../../../api/products.json';


const defaultState = {
  sort_products: products
}


const AscendingF = (state, action) => {

  switch(action.payload) {
      case 1: {
          return {
            sort_products: state.sort_products.sort((a, b) => b.price-a.price)
          }
      }

      case 2: {
          return {
            sort_products: state.sort_products.sort((a, b) => a.price-b.price)
          }
      }

  }


}

export const SortReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SORT_ASCENDING':return AscendingF(state,action);
    }
    return state;
};



//        sort_products: state.sort_products.sort((a, b) => a.price-b.price)
