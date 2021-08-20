import React from 'react'

export default class LikesButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: this.props.likes
        }
    }

    handleOnClick = () => {
      this.setState({
          likes: this.state.likes + 1
      })
      this.addLike()
    }

    addLike = () => {
      const data = {likes: this.state.likes + 1}
      const config={
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      }
      fetch(`http://localhost:3000/toys/${this.props.id}`, config)
      .then(resp => resp.json())
      .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                <p>{this.state.likes} Likes </p>
                <button onClick={this.handleOnClick} className="like-btn">Like {'<3'}</button>
            </div>
        )
    }
}