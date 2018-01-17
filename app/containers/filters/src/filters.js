import React       from 'react';
import PropTypes   from 'prop-types';
import { connect } from 'react-redux';

import { bindActionCreators }       from 'redux';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


import { FindStyle } from '../../../actions';

import { Search } from '../../../components/search';
import { ColorFilter } from '../../../components/color-filter'
import './filters.scss';





export class FilterContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 0};

    this.handleChange = this.handleChange.bind(this)

  };

  handleChange(event, index, value) {
    this.setState({value});

    this.props.FindStyle(value)
  }


    render() {
        return (
          <div className="filter">


          <div className="search-style">

                <Search />


            <DropDownMenu value={this.state.value} onChange={this.handleChange} style={{ marginTop: '24px'}} >
              <MenuItem value={0} primaryText="Стиль" />
              <MenuItem value={1} primaryText="Абстракция" />
              <MenuItem value={2} primaryText="Импрессионизм" />
              <MenuItem value={3} primaryText="Модерн" />
              <MenuItem value={4} primaryText="Коценптуальное" />
              <MenuItem value={5} primaryText="Пейзаж" />
              <MenuItem value={6} primaryText="Футуризм" />
              <MenuItem value={7} primaryText="Экспрессионизм" />
              <MenuItem value={8} primaryText="Минимализм" />
              <MenuItem value={9} primaryText="Реализм" />
              <MenuItem value={10} primaryText="Портрет" />
            </DropDownMenu>

          </div>
          <div>
          <ColorFilter />
          </div>
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

const matchDispatchToProps = dispatch => bindActionCreators(
    {
        FindStyle
    },
    dispatch
);


export const Filters = connect(mapStateToProps, matchDispatchToProps)(FilterContainer);
