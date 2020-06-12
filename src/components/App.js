import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Build-A-Form</h1>
      <div className="home-btns">
        <Link to="/create/form" className="home-btn create-form-btn">+ Create A New Form</Link>
        <br />
        <Link to="/forms" className="home-btn view-forms-btn">&dArr; Saved Forms &dArr;</Link>
      </div>
    </div>
  );
}

export default App;
