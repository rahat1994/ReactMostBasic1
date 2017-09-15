import React, { Component } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Midsection from './components/mid-section';
import Lowermidsection from './components/lower-mid-section';
import './App.css';

class App extends Component {
  render() {

    
    return (
    	<div>
	      <Header/>
	      <Hero/>
	      <Midsection/>
	      <Lowermidsection/>
		</div>      
    );
  }
}

export default App;
