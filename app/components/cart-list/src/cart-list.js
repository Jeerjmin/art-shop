import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';




export class CartList extends React.Component {

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


              return (

                <div>
                  {console.log('Items', Items)}
                  {console.log('Props.cart', this.props.cart.products)}
                  {Items}
                  £{this.props.cart.total}
                  <button onClick={this.handleCloseModal}>Close Modal</button>

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
