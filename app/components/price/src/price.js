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
        value: { min: 2, max: 10 },
      };

  }

    render() {
        return(
          <form className="priceForm">
          <InputRange
              maxValue={20}
              minValue={0}
              value={this.state.value}
              onChange={value => this.setState({ value })} />
          </form>
        )
      }

    }









    const matchDispatchToProps = dispatch => bindActionCreators(
        {

        },
        dispatch
    );

    export const PriceFilter = connect(matchDispatchToProps)(PriceFilterContainer);
