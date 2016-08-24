import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import StringUtils from './string_utils';
import SearchStore from './search_store';

let searchTimeout;

const SearchField = React.createClass({
  getInitialState(){
    return {value: ""};
  },
  componentDidMount(){
    searchTimeout = null;
  },
  handleChange(e){
    this.setState({value: e.target.value});
    SearchStore.setParam(this.props.fieldName, e.target.value);
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(this.refreshData, 500);
  },
  handleSubmit(e){
    e.preventDefault();
    this.refreshData();
  },
  refreshData(){
    const selfNode = ReactDOM.findDOMNode(this);
    selfNode.dispatchEvent(window.tablerefresh);
  },
  render () {
    return (
      <div className='search-field' data-value={this.state.value}>
        <form onSubmit={this.handleSubmit}>
          <label>
            {StringUtils.capitalize(this.props.fieldName) + ": "}
          </label>
          <input type='text' value={this.state.value} onChange={this.handleChange}></input>
        </form>
        <button onClick={this.props.handleFieldDelete}>Clear</button>
      </div>
    );
  }
});

export default SearchField;
