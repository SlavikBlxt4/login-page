import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './css/App.css';

import LoginPage from './pages/LoginPage';
import Main from './pages/Main';

function App() {
  const [page, setPage] = useState('/');
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main setPage={setPage} />} />
          <Route path="/login" element={<LoginPage setPage={setPage} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
