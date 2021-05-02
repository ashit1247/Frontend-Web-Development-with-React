import React, { Component } from 'react';
import Home from './components/HomeComponent';
import Menu from './components/MenuComponent';
import Contact from './components/ContactComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/menu" component={Menu}/>
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
