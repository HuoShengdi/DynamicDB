import React, { PropTypes } from 'react';
import CustomerForm from './customer_form';

const TableEntry = React.createClass({
  getInitialState(){
    return {editing: false};
  },
  render () {
    const fieldEntries = Object.keys(this.props.customer).map((key)=>{
      if (key !== "id"){
        return(
          <td className={key} key={key}>
            {this.props.customer[key]}
          </td>
        );
      }
    });
    return (
      <div>
        {fieldEntries}
      </div>
    );
  }
});

export default TableEntry;
