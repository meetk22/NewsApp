import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import News from './Components/News';
import NewsSources from './Components/NewsSources';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Fav from './Components/Fav';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
      <Routes>
      <Route path="/" element={<NewsSources />}></Route>
      <Route path="/news/:sourceId" element={<News />}></Route>
      <Route path="/favourite" element={<Fav />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
