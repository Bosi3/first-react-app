import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Customers from './Customers'
import { BrowserRouter as Router } from 'react-router-dom';
//import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchAppBar from './components/searchBar.js';
import ImgMediaCard from './components/mediaCard.js';
import MediaCardAbout from './components/mediaCardAbout.js'
import MediaCardWorkshops from './components/mediaCardWorkshops.js'
class App extends Component {
  render() {
    console.log("Host URL" + process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
         
        
          <header className="App-header">
         <SearchAppBar />
         

            
          </header>
           <ImgMediaCard />
           
            <MediaCardAbout /> 
            <MediaCardWorkshops />    
          <React.Fragment>
      <CssBaseline />
      {/* The rest of your application */}
    </React.Fragment>
    
        </div>
 
      </Router>
      
    );
  }
}

export default App;