import React, { Component } from 'react';
import LikesButton from './Likes'
class ToyCard extends Component {

  remove = () => {
    const toyId = this.props.toy.id
    console.log(this.props)
    this.props.delete(toyId)
    const config = {
      method: 'DELETE',
      hearders: {
        'Content-Type': 'applcation/json'
      },
      body: JSON.stringify(toyId)
    }
    fetch(`http://localhost:3000/toys/${toyId}`, config)
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  render() {
    const {name, image, likes, id} = this.props.toy
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        {/* <p>{likes} Likes </p>
        <button className="like-btn">Like {'<3'}</button> */}
        <LikesButton likes = {likes} id={id} />
        <button onClick={this.remove} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
