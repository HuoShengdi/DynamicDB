import React, { PropTypes } from 'react';
import ApiUtils from './api_utils';

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
        const capName = name[0].toUpperCase() + name.slice(1);
        return (<th className={`column-name ${name}`} key={name}>{capName}</th>);
      }
    });
    return (
      <div>
        <tr>
          {columnNames}
        </tr>
      </div>
    );
  }
});

export default TableColumns;
