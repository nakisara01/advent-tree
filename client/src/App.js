import './App.css';
import SojuTree from './component/SojuTree.js';
import NavBar from './component/NavBar.js';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Auth from './hoc/auth';

/* Components */
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';

function App() {
  // const AuthMainPage = Auth(MainPage, false);
  // const AuthLoginPage = Auth(LoginPage, false);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={LoginPage} />
          {/* <Route exact path="/" element={<AuthMainPage />} />
        <Route exact path="/login" element={<AuthLoginPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;