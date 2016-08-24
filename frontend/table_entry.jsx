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
  openForm(){
    this.setState({editing: true});
  },
  closeForm(){
    this.refreshData();
    this.setState({editing: false});
  },
  render () {
    const fieldEntries = Object.keys(this.props.customer).map((key)=>{
      if (key !== "id"){
        return(
          <span className={'table-data ' + key} key={key}>
            {this.props.customer[key]}
          </span>
        );
      }
    });

    const tableRow = (
      <div>
        {fieldEntries}
        <button onClick={this.openForm}>Edit</button>
      </div>
    );

    const editForm = <CustomerForm customer={this.props.customer} closeForm={this.closeForm}/>;

    return (
      <div className='table-row'>
        {this.state.editing ? editForm : tableRow}
      </div>
    );
  }
});

export default TableEntry;
