import React       from 'react';
import PropTypes   from 'prop-types';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';



import SVGInline from 'react-svg-inline';
import bagIcon from '../../../assets/svg/bag.svg';
import wishlistIcon from '../../../assets/svg/wishlist.svg';
import logo2 from '../../../assets/svg/logo2.svg';
import {CartListContainer} from '../../../components/cart-list'


import './header.scss';



export class HeaderContainer extends React.Component {
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
      console.log('cart',this.props.cart.products)
    }

    handleCloseModal () {
      this.setState({ showModal: false });
    }

    render() {
        return (
            <header className="header container">
                <SVGInline className="page-title" svg={logo2} />

                <aside className="header-bag">
                    <div onClick={this.handleOpenModal} className="header-bag__item header-bag__count">
                        <SVGInline svg={bagIcon} />
                          <span className="bag__item-counter">{this.props.cart.products.length}</span>
                    </div>

                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="Minimal Modal Example"
                        onRequestClose={this.handleCloseModal}
                        className="Modal-Header"
                        overlayClassName="Overlay"
                    >


                  <div>

                    <CartListContainer />

                  </div>


                  </ReactModal>

                    <div className="header-bag__item header-bag__wishlist-count">
                        <SVGInline svg={wishlistIcon} />
                        <span className="bag__item-counter">{this.props.wishlist.products.length}</span>
                    </div>
                </aside>
            </header>
        );
    }
}

// type checking for the props properties
HeaderContainer.propTypes = {
    title: PropTypes.string.isRequired,
    cart: PropTypes.object.isRequired,
    wishlist: PropTypes.object.isRequired
};


const mapStateToProps = state => (
    {
        cart: state.cart,
        wishlist: state.wishlist,
        products: state.products
    }
);


export const Header = connect(mapStateToProps)(HeaderContainer);
