import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { bindActionCreators }       from 'redux';

import { onFind } from '../../../actions';
import { Product }                  from '../../../components/product';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Input } from 'semantic-ui-react'
import FlatButton from 'material-ui/FlatButton';
import './search.scss';

const style = {
  marginRight: 20,

};

var content = [
  { title: 'Andorra' },
  { title: 'United Arab Emirates' },
  { title: 'Afghanistan' },
  { title: 'Antigua' },
  { title: 'Anguilla' },
  { title: 'Albania' },
  { title: 'Armenia' },
  { title: 'Netherlands Antilles' },
  { title: 'Angola' },
  { title: 'Argentina' },
  { title: 'American Samoa' },
  { title: 'Austria' },
  { title: 'Australia' },
  { title: 'Aruba' },
  { title: 'Aland Islands' },
  { title: 'Azerbaijan' },
  { title: 'Bosnia' },
  { title: 'Barbados' },
  { title: 'Bangladesh' },
  { title: 'Belgium' },
  { title: 'Burkina Faso' },
  { title: 'Bulgaria' },
  { title: 'Bahrain' },
  { title: 'Burundi' }
  // etc
];

export class SearchContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }

  this.handleChange= this.handleChange.bind(this)
  this.handleClick= this.handleClick.bind(this)

  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
    this.props.onFind(event.target.value)
  }

  handleClick() {
    this.props.onFind(this.state.value)
  }



  render() {

      return(
        <div className="Search">
          <div>
            <TextField id="text-field-controlled" value={this.state.value} onChange={this.handleChange}
            hintText="Search"
            style={{ marginTop: '30px'}}
            />
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
        onFind
    },
    dispatch
);

export const Search = connect(mapStateToProps, matchDispatchToProps)(SearchContent);
