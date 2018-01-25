import React                        from 'react';
import PropTypes                    from 'prop-types';
import { bindActionCreators }       from 'redux';
import { connect }                  from 'react-redux';

import configuration                from '../../../config.json';
import { addToCart, addToWishlist, Ascending, Descending } from '../../../actions';
import { Product }                  from '../../../components/product';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import SVGInline from 'react-svg-inline';
import sortDown from '../../../assets/svg/sort-down.svg';
import sortUp from '../../../assets/svg/sort-up.svg';

import './products-list.scss';


class ProductsListContainer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        value: 0,
        valuePrice: 0,
        active1: '',

      };


      this.handleChange = this.handleChange.bind(this)
      this.handlePrice = this.handlePrice.bind(this)

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

    handlePrice() {

      if (this.state.valuePrice == 0) {
        this.setState({valuePrice: 1, active1: sortDown });
        this.props.Ascending(1)
      }
      if (this.state.valuePrice == 1) {
        this.setState({valuePrice: 2, active1: sortUp })
        this.props.Ascending(2)
      }
      if (this.state.valuePrice == 2) {
        this.setState({valuePrice: 1, active1: sortDown})
        this.props.Ascending(1)
      }


      console.log('valuePrice', this.state.valuePrice)
    }


    render() {


        return (
          <div>
            <div onClick={this.handlePrice} className="sort__content">
              <h3>{this.props.products.length} PRODUCTS</h3>
              &nbsp;  &nbsp; &nbsp;  &nbsp;
              <p>by price</p>
              &nbsp;  &nbsp;
              <div className="sort__arrows">
              <SVGInline className="sort__arrow"  svg={this.state.active1} />
              </div>
            </div>





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
