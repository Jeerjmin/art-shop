import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators }       from 'redux';
import { deleteFromCart } from '../../../actions';

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
            <div key={i}>
              {this.props.cart.cartTitle[i]}
              {this.props.cart.cartSubTitle[i]}

              <img  className="product-cart-image"
                    src={require("../../../assets/images/"+this.props.cart.cartImage[i])}
                    alt="Product" itemProp="image"
              />

            <button value={i} onClick={() => this.props.deleteFromCart(i)}>X</button>
            </div>
       )




              return (

                <div>

                  { Title }
                  £{this.props.cart.total}


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
