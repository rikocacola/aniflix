import { useState } from 'react';
import axios from 'axios';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import DetailPage from './pages/DetailPage/DetailPage';
import TopAiringPage from './pages/TopAiringPage/TopAiringPage';
import TopMoviePage from './pages/TopMoviePage/TopMoviePage';

import './App.scss'

function App() {
  const [searchField, setSearchField] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = e => {
    setSearchField(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios.get(`https://api.jikan.moe/v3/search/anime?q=${searchField}`)
      .then(res => setResults(res.data.results))
  }


  return (
    <div className="App">
      <div className="navbar">
        <Header handleChange={handleChange} handleSubmit={handleSubmit} value={searchField} />
      </div>
      <div className="content">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" render={(props) => <SearchPage {...props} />} />
          <Route path="/detail/:id" component={DetailPage} />
          <Route path="/airing" component={TopAiringPage} />
          <Route path="/movie" component={TopMoviePage} />
        </Switch>
      </div>
    </div>
  )
}

export default App;