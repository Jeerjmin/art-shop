import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators }       from 'redux';
import { connect } from 'react-redux';

import { } from '../../../actions';
import './price.scss'

import InputRange from 'react-input-range';





export class PriceFilterContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        minPrice: Math.min.apply(null, this.props.products.map(a=> a.price)),
        maxPrice: Math.max.apply(null, this.props.products.map(a=> a.price)),
        value: { min: Math.min.apply(null, this.props.products.map(a=> a.price)), max: Math.max.apply(null, this.props.products.map(a=> a.price)) },
      };

      this.SearchPrice = this.SearchPrice.bind(this);

  }

  SearchPrice() {

  }

    render() {
      var maxV = Math.max.apply(null, this.props.products.map(a=> a.price));
      var minV = Math.min.apply(null, this.props.products.map(a=> a.price));


        return(
          <form className="priceForm">
          <InputRange
              maxValue={maxV}
              minValue={minV}
              value={this.state.value}
              onChange={value => this.setState({ value })} />
            {console.log('price',this.props.products.map(a=> a.price))}
          </form>
        )
      }

    }



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
        }
    );





    const matchDispatchToProps = dispatch => bindActionCreators(
        {

        },
        dispatch
    );

    export const PriceFilter = connect(mapStateToProps, matchDispatchToProps)(PriceFilterContainer);
