import React, { Component } from 'react';

class ToyForm extends Component {
  constructor() {
    super()
    this.name = React.createRef()
    this.image = React.createRef()
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    const toyData = { name: this.name.current.value, image: this.image.current.value, likes: 0 }
    const config = {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(toyData)
    }
    fetch('http://localhost:3000/toys', config)
      .then( resp => resp.json())
      .then(data => {
        this.props.triggerUpdate(data)
        console.log(data)

      })
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" ref={this.name} />
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" ref={this.image} />
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
