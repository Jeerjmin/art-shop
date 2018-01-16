import React       from 'react';
import PropTypes   from 'prop-types';
import { connect } from 'react-redux';


import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


import { Search } from '../../../components/search';
import './filters.scss';




export class DropDownMenuStyle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};

    this.handleChange = this.handleChange.bind(this)
  };

  handleChange(event, index, value) {
    this.setState({value});
  }

  render() {
    return (
      <div>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}   style={{ marginTop: '24px'}} >
          <MenuItem value={1} primaryText="Абстракция" />
          <MenuItem value={2} primaryText="Импрессионизм" />
          <MenuItem value={3} primaryText="Модерн" />
          <MenuItem value={4} primaryText="Коценптуальное" />
          <MenuItem value={5} primaryText="Пейзаж" />

        </DropDownMenu>
      </div>
    );
  }
}


export class FilterContainer extends React.Component {

    render() {
        return (
          <div className="filter">
        <Search />
        <DropDownMenuStyle   className="test"     />
        </div>

        );
    }
}

// type checking for the props properties
FilterContainer.propTypes = {
    products: PropTypes.array.isRequired
};


const mapStateToProps = state => (
    {
        products: state.products

    }
);


export const Filters = connect(mapStateToProps)(FilterContainer);
