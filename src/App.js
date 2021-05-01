import React, { Component } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from './shared/dishes';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

function App() {
  return (
    <div>
      {/* <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar> */}
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  );
}


export default App;
