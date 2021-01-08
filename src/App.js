import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

import './App.scss'

function App() {
  const [searchField, setSeachField] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setSeachField(e.target.value)
  }

  return (
    <div className="App">
      <div className="navbar">
        <Header handleChange={handleChange} />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  )
}

export default App;