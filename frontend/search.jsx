import React, { PropTypes } from 'react';
import CustomerTable from './customer_table';
import SearchField from './search_field';

const Search = React.createClass({
  getInitialState(){
    return {fields: ["name"]};
  },
  render () {

    return (
      <div>
        <CustomerTable/>
      </div>
    );
  }
});

export default Search;
