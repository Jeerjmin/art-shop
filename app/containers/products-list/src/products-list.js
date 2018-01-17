import React                        from 'react';
import PropTypes                    from 'prop-types';
import { bindActionCreators }       from 'redux';
import { connect }                  from 'react-redux';

import configuration                from '../../../config.json';
import { addToCart, addToWishlist } from '../../../actions';
import { Product }                  from '../../../components/product';

import './products-list.scss';


class ProductsListContainer extends React.Component {


    isProductInCart(productId, productsInCart) {
        return productsInCart.includes(productId);
    }


    isProductInWishlist(productId, productsInWishlist) {
        return productsInWishlist.includes(productId);
    }


    createListOfProducts(selectedPage, products) {
        const maxRange = selectedPage * configuration.productsPerPage;

        return products
            .filter((_, index) => index < maxRange && index >= (maxRange - 6))
            .map(product => (
                <li key={product.id} className="product-list__item">
                    <Product product={product}
                        isProductInCart={this.isProductInCart(product.id, this.props.productsInCart)}
                        isProductInWishlist={this.isProductInWishlist(product.id, this.props.productsInWishlist)}
                        onAddToCartClick={this.props.addToCart}
                        onAddToWishlistClick={this.props.addToWishlist} />
                </li>
            ));
    }


    render() {
        return (
            <ul className="product-list">
                {this.createListOfProducts(this.props.pagination.selectedPage, this.props.products)}
            </ul>
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

        // state.products.filter( function(product) {if (state.color==true) {
        //                                                        return product.color.includes("red")
        //                                                        console.log("test",state.color)
        //                                                      }
        //                                                    else
        //                                                        return product}  ),

        pagination: state.pagination,
        productsInCart: state.cart.products,
        productsInWishlist: state.wishlist.products
    }
);


const matchDispatchToProps = dispatch => bindActionCreators(
    {
        addToCart,
        addToWishlist
    },
    dispatch
);


export const ProductsList = connect(mapStateToProps, matchDispatchToProps)(ProductsListContainer);
