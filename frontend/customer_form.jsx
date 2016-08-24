import React, { PropTypes } from 'react';
import ApiUtils from './api_utils';

const CustomerForm = React.createClass({
  getInitialState(){
    const customer = this.props.customer;
    return(
      {
        id: customer.id,
        name: customer.name,
        location: customer.location,
        age: customer.age
      }
    );
  },

  update(fieldName){
    return function(e){
      this.setState({[fieldName]: e.target.value});
    };
  },
  handleSubmit(e){
    e.preventDefault();
    const formData = {customer: this.state};
    ApiUtils.updateCustomer(formData, this.props.formSubmit);
  },
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="name" value={this.state.name} onChange={this.update("name")}></input>
          <input type="text" className="location" value={this.state.location} onChange={this.update("location")}></input>
          <input type="text" className="age" value={this.state.age} onChange={this.update("age")}></input>
          <input type="submit">Submit</input>
        </form>
      </div>
    );
  }
});

export default CustomerForm;
