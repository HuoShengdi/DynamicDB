import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ApiUtils from './api_utils';
import StringUtils from './string_utils';
import CustomerTable from './customer_table';
import SearchField from './search_field';
import SearchStore from './search_store';

const Search = React.createClass({
  getInitialState(){
    return {activeFields: ["name"], fields: ["name"], params: {}};
  },
  handleFieldClick(e){
    let newFields = this.state.activeFields.concat([e.target.value]);

    this.setState({activeFields: newFields});
  },
  handleFieldDelete(fieldName){
    return (e)=>{
      const fieldIdx = this.state.activeFields.indexOf(fieldName);
      const newFields = this.state.activeFields;
      SearchStore.deleteParam(fieldName);
      const selfNode = ReactDOM.findDOMNode(this);
      selfNode.dispatchEvent(window.tablerefresh);
      newFields.splice(fieldIdx, 1);
      this.setState({activeFields: newFields});
    };
  },
  componentDidMount(){
    this.getFields();
    const selfNode = ReactDOM.findDOMNode(this);
    selfNode.addEventListener('tablerefresh', this.getFieldParams);
  },
  getFields(){
    ApiUtils.getFields(this.setFields);
  },
  setFields(fieldnames){
    this.setState({fields: fieldnames});
  },
  getFieldParams(){
    const newParams = SearchStore.getParams();
    this.setState({params: newParams});
  },
  render () {
    const fieldOptions = this.state.fields.map((field)=>{
      if (!this.state.activeFields.includes(field) && !["id", "created_at", "updated_at"].includes(field)){
        return <option value={field} key={field}>{StringUtils.capitalize(field)}</option>;
      }
    });
    const fieldSelector = (
      <select id='selector' defaultValue="" onChange={this.handleFieldClick}>
        <option value="">-- Filter By --</option>
        {fieldOptions}
      </select>);
    const activeFieldItems = this.state.activeFields.map((field)=>{
      return (
        <SearchField
          fieldName={field}
          key={field}
          handleFieldDelete={this.handleFieldDelete(field)}
        />
      );
    });
    return (
      <div>
        <div id="search-pane">
          <div id='selector-wrapper'>
            {"Select Filter:"}
            {fieldSelector}
          </div>
          {activeFieldItems}
        </div>
        <CustomerTable searchParams={this.state.params}/>
      </div>
    );
  }
});

export default Search;
