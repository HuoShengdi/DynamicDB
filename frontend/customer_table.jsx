import React, { PropTypes } from 'react';
import TableColumns from './table_columns';
import TableEntry from './table_entry';
import ApiUtils from './api_utils';

const CustomerTable = React.createClass({
  getInitialState(){
    return {customers: []};
  },
  componentDidMount(){
    this.queryCustomers(this.props.searchParams);
  },
  componentWillReceiveProps(props){
    this.queryCustomers(props.searchParams);
  },
  queryCustomers(params){
    ApiUtils.searchQuery(params, this.setCustomers);
  },
  setCustomers(customers){
    this.setState({customers: customers});
  },
  render () {
    const customerEntries = this.state.customers.map((customer)=>{
      return (<TableEntry customer={customer} key={customer.id}/>);
    });
    return (
      <div id='customer-table'>
        <TableColumns/>
        <div className='table-body'>
          {customerEntries}
        </div>
      </div>
    );
  }
});

export default CustomerTable;
