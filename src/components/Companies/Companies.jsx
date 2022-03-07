import { useEffect } from 'react';
//import React, { useEffect, useState } from 'react';


// sub components to add to this page:
/*************************************
- search bar (form) component to send queries & filter the companies list*/
import CompanySearch from './CompanySearch';

//- a company list component to hold & display the companies, either raw or filtered lists
import List from './List';
//   - company item components to render individual companies in redux.store.companies
//- pagination component to interact with api & offset #
//*************************************/



function Companies() {


  return (
    <div className="container">
      <div>
        <CompanySearch />
        <p>Companies</p>
        <List />
      </div>
    </div>
  );
}

export default Companies;

