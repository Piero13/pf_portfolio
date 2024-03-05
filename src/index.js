import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.scss';

import Home from './pages/Home';
// import Profile from './components/Profile/Profile.jsx';
// import Portfolio from './components/Portfolio/Portfolio.jsx';
// import Skills from './components/Skills/Skills.jsx';
// import Contact from './components/Contact/Contact.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router> 
  </React.StrictMode>
);
