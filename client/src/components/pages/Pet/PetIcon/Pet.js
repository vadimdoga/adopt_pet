import React, { Component } from 'react'
import "./css/Pet.css"

export default class Pet extends Component {
  constructor(props){
    super(props)
    this.divRef = React.createRef()
    this.imgRef = React.createRef()
    this.state = {
      isPetClick: true
    }
  }
  render() {
    const petOnClick = () => {
      //decrale dom elements
      const img = this.imgRef.current
      const div = this.divRef.current

      if(this.state.isPetClick){
        img.style.height = "0"
        //create age element
        const age = document.createElement("p")
        age.innerHTML = `<span class="pet--bold">Age: </span>`
        let propsText = document.createTextNode(this.props.age)
        age.appendChild(propsText)
        //create color element
        const color = document.createElement("p")
        color.innerHTML = `<span class="pet--bold">Color: </span>`
        propsText = document.createTextNode(this.props.color)
        color.appendChild(propsText)
        //create gender element
        const gender = document.createElement("p")
        gender.innerHTML = `<span class="pet--bold">Gender: </span>`
        propsText = document.createTextNode(this.props.gender)
        gender.appendChild(propsText)
        //create goto element
        const animal_id = this.props.id
        const goto = document.createElement("a")
        goto.href = `/animals/${animal_id}`
        goto.innerHTML = `<span class="pet--bold">More...</span>`


        setTimeout(() => {
          div.appendChild(age)
          div.appendChild(color)
          div.appendChild(gender)
          div.appendChild(goto)
        }, 230);

      } else {
        setTimeout(() => {
          div.children[5].remove()
          div.children[4].remove()
          div.children[3].remove()
          div.children[2].remove()
          img.style.height = "90%"
        }, 230);
      }
      //change state value
      this.setState({
        isPetClick: !this.state.isPetClick
      })
    }
    return (
      <div ref={this.divRef} className="pet" onClick={petOnClick}>
        <img ref={this.imgRef} className="pet__image" src={this.props.imgSrc} alt={this.props.name} />
        <p>
          <span className="pet--bold">Name: </span>
          {this.props.name}
        </p>
      </div>
    )
  }
}

