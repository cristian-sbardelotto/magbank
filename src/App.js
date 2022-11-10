import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, redirect } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AccountModal from './components/AccountModal';
import './App.scss';

import Home from './views/Home';
import Login from './views/Login';
import Dashboard from './views/Dashboard';

const PrivateRoute = ({ children, logged = false, ...rest }) => (
  <Routes>
    <Route
      {...rest}
      render={() => (logged ? children : redirect('/login'))} />
  </Routes>
);

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
        <Route path='/' element={<Home handleClick={() => setShowModal(true)} />} />
      </Routes>

        <PrivateRoute logged={isLogged} path='/dashboard/*' element={<Dashboard name={name} account={account} /> } />

      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} auth={fakeAuth} />
    </Router>
);
};

export default App;
