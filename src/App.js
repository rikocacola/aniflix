import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import DetailPage from './pages/DetailPage/DetailPage';
import TopAiringPage from './pages/TopAiringPage/TopAiringPage';
import TopMoviePage from './pages/TopMoviePage/TopMoviePage';

import './App.scss'

function App() {

  return (
    <div className="App">
      <div className="navbar">
        <Header />
      </div>
      <div className="content">
        <Switch>
          <Route path="/aniflix" exact component={HomePage} />
          <Route path="/aniflix/search/:search" component={SearchPage} />
          <Route path="/aniflix/detail/:id" component={DetailPage} />
          <Route path="/aniflix/airing" component={TopAiringPage} />
          <Route path="/aniflix/movie" component={TopMoviePage} />
        </Switch>
      </div>
    </div>
  )
}

export default App;