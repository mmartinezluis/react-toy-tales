import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  componentDidMount() {    
    fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then( data => this.setState({
          toys: data
      })
    )  
  }

  triggerUpdate = (data) => {
    this.setState({
      toys: [...this.state.toys, data]
    })
  }

  triggerDelete = (id) => {
    this.setState({
      toys: [
        ...this.state.toys.filter( toy => toy.id !== id )
      ]
    })
  }



  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm triggerUpdate={this.triggerUpdate} />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys = {this.state.toys} triggerDelete={this.triggerDelete}/>
        {/* {this.state.toys} */}
      </>
    );
  }

}

export default App;
