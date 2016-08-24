import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import CustomerForm from './customer_form';

const TableEntry = React.createClass({
  getInitialState(){
    return {editing: false};
  },
  refreshData(){
    const selfNode = ReactDOM.findDOMNode(this);
    selfNode.dispatchEvent(window.tablerefresh);
  },
  handleFormSubmit(){
    this.refreshData();
    this.setState({editing:false});
  },
  render () {
    const fieldEntries = Object.keys(this.props.customer).map((key)=>{
      if (key !== "id"){
        return(
          <span className={key} key={key}>
            {this.props.customer[key]}
          </span>
        );
      }
    });

    const editForm = <CustomerForm customer={this.props.customer} formSubmit={this.handleFormSubmit}/>;


    return (
      <div>
        {fieldEntries}
      </div>
    );
  }
});

export default TableEntry;
