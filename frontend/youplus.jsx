import React, { PropTypes } from 'react';
import CustomerTable from './customer_table';
import Search from './search';
import ReactDOM from 'react-dom';

const Youplus = (
      <div>
        <h1>Customers</h1>
        <Search/>
      </div>
);

document.addEventListener("DOMContentLoaded", ()=>{
  const tableRefresh = new Event('tablerefresh', {'bubbles':true});
  const root = document.getElementById('content');
  window.tablerefresh = tableRefresh;
  ReactDOM.render(Youplus, root);
});
