import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AccountModal from './components/AccountModal';
import './App.scss';

import Home from './views/Home';
import Login from './views/Login';
import Dashboard from './views/Dashboard';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState();
  const [account, setAccount] = useState();
  const isLogged = name && account;

  const fakeAuth = {
    login(name, account, cb) {
      setName(name);
      setAccount(account);
      setTimeout(cb, 100);
    },
    logout(cb) {
      setName();
      setAccount();
      setTimeout(cb, 100);
    }
  };

  return (
    <Router>
      <Navbar handleCreateAcc={() => setShowModal(true)} />

      <Routes>
        <Route path='/login' element={<Login auth={fakeAuth} />} />
        <Route path='/dashboard/*' element={<Dashboard /> } />
        <Route path='/' element={<Home handleClick={() => setShowModal(true)} />} />
      </Routes>

      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)}/>
    </Router>
);
};

export default App;
