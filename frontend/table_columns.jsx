import React, { PropTypes } from 'react';
import ApiUtils from './api_utils';
import StringUtils from './string_utils';

const TableColumns = React.createClass({
  getInitialState(){
    return {fields: []};
  },
  componentDidMount(){
    this.getFields();
  },
  getFields(){
    ApiUtils.getFields(this.setFields);
  },
  setFields(fieldnames){
    this.setState({fields: fieldnames});
  },
  render () {
    const columnNames = this.state.fields.map((name)=>{
      if (!["id", "created_at", "updated_at"].includes(name)){
        return (<span className={`column-name ${name}`} key={name}>{StringUtils.capitalize(name)}</span>);
      }
    });
    return (
      <div>
        {columnNames}
      </div>
    );
  }
});

export default TableColumns;
