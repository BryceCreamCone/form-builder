import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Build-A-Form</h1>
      <div className="home-btns">
        <Link to="/forms/create" className="home-btn create-form-btn">+ Create A New Form</Link>
        <br />
        <Link to="/forms/:id" className="home-btn view-forms-btn">View Saved Forms</Link>
      </div>
    </div>
  );
}

export default App;
