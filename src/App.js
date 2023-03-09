import React from 'react';
import './App.css';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers';
import { CTA, Navbar, Brand } from './components';
//import { Switch, Route, Link } from 'react-router-dom';
//import { Layout, Typography, Space } from 'antd';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
