import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hero from '../components/Hero';
import CreditCard from '../components/CreditCard';
import CardList from '../components/CardList';
import CenteredButton from '../components/CenteredButton';
import Institutional from '../components/Institutional';
import Faq from '../components/Faq';

import posts from '../data/posts';

const Home = ({ handleClick }) => (
  <>
    <Hero handleCreateAcc={handleClick} />
    <CreditCard />
    <CardList posts={posts} />
    <CenteredButton onClick={handleClick}>
      Abra sua conta
    </CenteredButton>
    <Institutional handleCreateAcc={handleClick} />
    <Faq />
  </>
);

export default Home;
