import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import { ProductPrice } from '../../product-price';
import { ProductImage } from '../../product-image';
import { AddToCart } from '../../add-to-cart';

import './details.scss'



export class Details extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

    render() {

      var t = this.props.product.image

        return (
          <div className = "DetailsContainer">
            <button className="product__add-to-cart button button--primary button--in-cart"
                    onClick={this.handleOpenModal}>
                Details
            </button>
            <ReactModal
                isOpen={this.state.showModal}
                contentLabel="Minimal Modal Example"
                onRequestClose={this.handleCloseModal}
                className="Modal"
                overlayClassName="Overlay"
            >
            <div>

              <h1 className="product__title" itemProp="brand">{this.props.product.title}</h1>
              <p className="product__subtitle" itemProp="description">{this.props.product.subtitle}</p>
                <ProductPrice
                    price={this.props.product.price}
                    priceDiscounted={this.props.product.priceDiscounted}
                />

              <img className="product-details__image" src={require("../../../assets/images/"+t)} alt="Product" itemProp="image" />

                <AddToCart
                    product={this.props.product}
                    onAddToCartClick={this.props.onAddToCartClick}
                    isProductInCart={this.props.isProductInCart}
                />

            </div>

                <button onClick={this.handleCloseModal}>Close Modal</button>
            </ReactModal>
          </div>
        );
    }
}



Details.propTypes = {
    product: PropTypes.object.isRequired,

};
