import React from 'react';
import DataTable from './DataTable';
import './App.css';
import data from './seed.json';
const App = () => {

    return (
      <div className="container mt-3">
        <DataTable data={data} locale="da" rowsPerPage={5} />
      </div>
    );
  
}

export default App;
