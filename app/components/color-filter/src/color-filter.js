import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators }       from 'redux';
import { connect } from 'react-redux';

import { FindRed, FindBlue, FindYellow, FindGreen, FindBrown } from '../../../actions';
import { Product }                  from '../../../components/product';

import RaisedButton from 'material-ui/RaisedButton';

import './color-filter.scss'


var style = {

}

export class ColorFilterContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value1: '',
      value2: false,
      value3: false,
      value4: false,
      value5: false,
      activeB1: '',
      activeB2: '',
      activeB3: '',
      activeB4: '',
      activeB5: ''
    }

  this.handleClick1= this.handleClick1.bind(this)
  this.handleClick2= this.handleClick2.bind(this)
  this.handleClick3= this.handleClick3.bind(this)
  this.handleClick4= this.handleClick4.bind(this)
  this.handleClick5= this.handleClick5.bind(this)

  }


  handleClick1(e) {

    if (this.state.activeB1== '') {
      this.setState({activeB1:'2px solid black'})
      this.state.value1='red'

    }
    else {
      this.setState({activeB1:''})
      this.state.value1=''
    }

    this.props.FindRed(this.state.value1)



  }
  handleClick2(e) {

    if (this.state.activeB2== '') {
      this.setState({activeB2:'2px solid black'})
      this.state.value2='blue'

    }
    else {
      this.setState({activeB2:''})
      this.state.value2=''
    }

    this.props.FindBlue(this.state.value2)



  }
  handleClick3(e) {

    if (e.target.value== '') {
      this.setState({activeB3:'2px solid black'})
      this.state.value3='green'
    }
    else {
      this.setState({activeB3:''})
      this.state.value3=''
    }

    this.props.FindGreen(this.state.value3)

  }
  handleClick4(e) {

    if (e.target.value== '') {
      this.setState({activeB4:'2px solid black'})
      this.state.value4='yellow'
    }
    else {
      this.setState({activeB4:''})
      this.state.value4=''
    }

    this.props.FindYellow(this.state.value4)

  }
  handleClick5(e) {

    if (e.target.value== '') {
      this.setState({activeB5:'2px solid black'})
      this.state.value5='brown'
    }
    else {
      this.setState({activeB5:''})
      this.state.value5=''
    }

    this.props.FindBrown(this.state.value5)

  }





  render() {
    const style1 = {border: this.state.activeB1}
    const style2 = {border: this.state.activeB2}
    const style3 = {border: this.state.activeB3}
    const style4 = {border: this.state.activeB4}
    const style5 = {border: this.state.activeB5}

      return(
        <div className="col-fil">
          <h5>Color: </h5>
          <div>
            <button className="buttonf buttonf1" value={this.state.value1} onClick={this.handleClick1} style={style1}>   </button>
            <button className="buttonf buttonf2" value={this.state.value2} onClick={this.handleClick2} style={style2}>   </button>
            <button className="buttonf buttonf3" value={this.state.value3} onClick={this.handleClick3} style={style3}>   </button>
            <button className="buttonf buttonf4" value={this.state.value4} onClick={this.handleClick4} style={style4}>   </button>
            <button className="buttonf buttonf5" value={this.state.value5} onClick={this.handleClick5} style={style5}>   </button>
          </div>
        </div>
      )
    }
}


const mapStateToProps = state => (
    {
        products: state.products
    }
);

const matchDispatchToProps = dispatch => bindActionCreators(
    {
        FindRed,
        FindBlue,
        FindGreen,
        FindYellow,
        FindBrown
    },
    dispatch
);

export const ColorFilter = connect(mapStateToProps, matchDispatchToProps)(ColorFilterContainer);
