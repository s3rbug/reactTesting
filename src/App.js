import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header></Header>
        <NavBar></NavBar>
        <div className="app-wrapper-content">
          <Route component={Dialogs} />
          <Route component={Profile} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
