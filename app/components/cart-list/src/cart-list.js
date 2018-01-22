import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

         var cartP = this.props.cart.products


         var Items = cartP.map((number) =>
           <div key={number.id}>
             <img  className="product-cart-image"
                   src={require("../../../assets/images/"+this.props.products[parseInt(number, 10) - 1].image)}
                   alt="Product" itemProp="image"
             />
             {this.props.products[parseInt(number, 10) - 1].title}
             {this.props.products[parseInt(number, 10) - 1].subtitle}

          </div>

       );

       var Buttons = cartP.map((number) =>
           <div key={number.id}>
             <button onClick={() => this.DeleteFromCart(Items, cartP, number)}>delete</button>
           </div>

      );




              return (

                <div>

                  {Items}

                  <div>
                    {Buttons}
                  </div>

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


export const CartListContainer = connect(mapStateToProps)(CartList);
