import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Box from "./components/Box"

class App extends Component {
  state= {
    data: [{ clicked: false}, {clicked: false}]
  }
  onClickEvent(index){

    let newData = this.state.data
    newData[index].cliked = !this.state.data[index].clicked
    this.setState({ data: newData })
    console.log("clicked")
  
  }

  isClicked(index) {
    const boxNumber = index === 0 ? 1 : 0
    if(this.state.data[boxNumber].clicked) {
      return `you clicked button ${boxNumber}`
      
    }
  }
  render() {
    return ( 
      <div className="App">

      {
        this.state.data.map((key, index) => {
          return(
            <Box textBox={this.isClicked(index)} key={index} 
            onBoxClick={() => this.onClickEvent(index)}  
              />
          )
        })
      }
       
      </div>
    );
  }
}

export default App;
