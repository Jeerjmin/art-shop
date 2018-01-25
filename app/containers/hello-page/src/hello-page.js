import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators }       from 'redux';
import SVGInline from "react-svg-inline";

import logo from '../../../assets/svg/logo.svg';


import './hello-page.scss'



export class HelloContainer extends React.Component {

    constructor (props) {
      super(props);


    }

    render() {

        return (
          <div className="hello-container">


            <SVGInline svg={logo} />
          </div>
      )
      }

    }



const mapStateToProps = state => (
    {

    }
);

const matchDispatchToProps = dispatch => bindActionCreators(
    {

    },
    dispatch
);

export const HelloPage = connect(mapStateToProps,matchDispatchToProps)(HelloContainer);
