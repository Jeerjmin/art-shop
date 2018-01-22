import React                        from 'react';
import PropTypes                    from 'prop-types';
import { bindActionCreators }       from 'redux';
import { connect }                  from 'react-redux';

import configuration                from '../../../config.json';
import { addToCart, addToWishlist, Ascending, Descending } from '../../../actions';
import { Product }                  from '../../../components/product';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


import './products-list.scss';


class ProductsListContainer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: 0};

      this.handleChange = this.handleChange.bind(this)

    };

    handleChange(event, index, value) {
      this.setState({value});

      this.props.Ascending(value)
    }

    isProductInCart(productId, productsInCart) {
        return productsInCart.includes(productId);
    }


    isProductInWishlist(productId, productsInWishlist) {
        return productsInWishlist.includes(productId);
    }

    doSomething(e){
      console.log('sumbit work it')
    }


    createListOfProducts(selectedPage, products) {
        const maxRange = selectedPage * configuration.productsPerPage;

        return products
            .filter((_, index) => index < maxRange && index >= (maxRange - 6))
            .map(product => (
                <li key={product.id} onClick={this.doSomething} className="product-list__item">
                    <Product  product={product}
                        isProductInCart={this.isProductInCart(product.id, this.props.productsInCart)}
                        isProductInWishlist={this.isProductInWishlist(product.id, this.props.productsInWishlist)}
                        onAddToCartClick={this.props.addToCart}
                        onAddToWishlistClick={this.props.addToWishlist} />
                </li>
            ));
    }


    render() {
        return (
          <div>
          <DropDownMenu value={this.state.value} onChange={this.handleChange} style={{ marginTop: '24px'}} >
            <MenuItem value={0} primaryText="Сортировать по" />
            <MenuItem value={1} primaryText="Убыванию цены" />
            <MenuItem value={2} primaryText="Возростанию цены" />

          </DropDownMenu>




            <ul className="product-list">
                {this.createListOfProducts(this.props.pagination.selectedPage, this.props.products)}
            </ul>
          </div>
        );
    }
}

ProductsListContainer.propTypes = {
    products: PropTypes.array.isRequired,
    pagination: PropTypes.object.isRequired,
    productsInCart: PropTypes.array.isRequired,
    productsInWishlist: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired,
    addToWishlist: PropTypes.func.isRequired
};


const mapStateToProps = state => (
    {
        products:
            (state.products.filter( product =>
              ( product.title.toUpperCase().includes( state.filter.toUpperCase() )
              ||
              product.subtitle.toUpperCase().includes( state.filter.toUpperCase() ))
              && (product.style.includes( state.style ) )
              && (product.color.includes(state.colorRed ))
              && (product.color.includes(state.colorBlue ))
              && (product.color.includes(state.colorGreen ))
              && (product.color.includes(state.colorYellow ))
              && (product.color.includes(state.colorBrown ))
            )),


        pagination: state.pagination,
        productsInCart: state.cart.products,
        productsInWishlist: state.wishlist.products
    }
);


const matchDispatchToProps = dispatch => bindActionCreators(
    {
        addToCart,
        addToWishlist,
        Ascending,
        Descending
    },
    dispatch
);


export const ProductsList = connect(mapStateToProps, matchDispatchToProps)(ProductsListContainer);
