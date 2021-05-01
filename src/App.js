import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './components/HomeComponent';
import Menu from './components/MenuComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {

  const HomePage = () => {
    return (
      <Home />
    );
  }

  const MenuPage = () => {
    return (
      <Menu />
    );
  }
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/menu" component={MenuPage} />
          <Redirect to="/home" />
        </Switch>
        <Menu />
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
