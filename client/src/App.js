import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Auth from './hoc/auth';

/* Components */
import MainPage from "./component/MainPage";
// import LoginPage from "./component/LoginPage";

function App() {
  // const AuthMainPage = Auth(MainPage, false);
  // const AuthLoginPage = Auth(LoginPage, false);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" elements={<MainPage />} />
          {/* <Route exact path="/login" elements={<LoginPage />} /> */}
          {/* <Route exact path="/" element={<AuthMainPage />} />
        <Route exact path="/login" element={<AuthLoginPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
