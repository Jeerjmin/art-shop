import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators }       from 'redux';
import { deleteFromCart } from '../../../actions';

import './cart-list.scss'

Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};


var I = 0;

export class CartList extends React.Component {

    constructor (props) {
      super(props);

      this.DeleteFromCart = this.DeleteFromCart.bind(this);
    }


    DeleteFromCart(Items, cartP, number) {


      cartP.remove(0)

      console.log('Items', Items)
      console.log('Buttons', Items)
      I=I+1;
      var V=I-1;

    }
    render() {



       if (this.props.cart.products != '') {

         const Title = this.props.cart.cartTitle.map((item,i,arr) =>
            <div className="element-cart" key={i}>

              <img  className="product-cart-image"
                    src={require("../../../assets/images/"+this.props.cart.cartImage[i])}
                    alt="Product" itemProp="image"
              />

            <div className="text-cart">
              <p className="cart__tittle">{this.props.cart.cartTitle[i]}</p>
              <p className="cart__subtitle">{this.props.cart.cartSubTitle[i] + ' '}</p>
              <p className="cart__price">£ {this.props.cart.cartPrice[i]}</p>



            <button className="button--in-cart"
                    value={i}
                    onClick={() => this.props.deleteFromCart(i)}>
                    <p>X</p>
            </button>

          </div>
            </div>
       )




              return (

                <div>

                  { Title }
                  <p className="total-price">Total: £ {this.props.cart.total} </p>

                    <button className="product__add-to-cart button button--primary button--in-cart">
                            BUY
                    </button>

                </div>
              );




      }

      else {
        return (
          <div>
            Ваша корзина пуста
          </div>
      )
      }

    }
}


const mapStateToProps = state => (
    {
        cart: state.cart,
        products: state.products
    }
);

const matchDispatchToProps = dispatch => bindActionCreators(
    {
        deleteFromCart
    },
    dispatch
);

export const CartListContainer = connect(mapStateToProps,matchDispatchToProps)(CartList);
