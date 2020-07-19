import React, { Component } from "react"
import Cookies from "universal-cookie"
import Pet from "../../Pet/PetIcon/Pet"
import "./css/ViewAnimals.css"
import ControlPointIcon from "@material-ui/icons/ControlPoint"
import EditIcon from '@material-ui/icons/Edit';
import rq from '../../../../axios'

const cookies = new Cookies()

export default class ViewAnimals extends Component {
  constructor() {
    super()

    this.state = {
      animals: [],
      breeds: [],
      colors: [],
      hair_types: [],
      images: []
    }
  }
  componentDidMount() {
    const user_id = cookies.get("user_id")
    if (isNaN(user_id)) {
      throw "Not Authorized"
    } else {
      rq.get('/animals/details')
        .then(res => {
          const details = res.data.details

          this.setState({
            breeds: details.breeds,
            colors: details.colors,
            hair_types: details.hair_types
          })
        })
      rq.get(`/animals/user/${user_id}`)
        .then(res => {
          this.setState({
            animals: res.data.data
          })
        })
      rq.get(`/animals/images/user/${user_id}`)
        .then(res => {
          this.setState({
            images: res.data.data
          })
        })
    }
  }
  render() {
    return (
      <div className="animals">
        <h2>My Animals</h2>
        <div className="animals__grid">
          {
            this.state.animals.map((animal) => {
              let animal_color;
              const animal_images = [];
              this.state.colors.forEach(color => {
                if (color.id === animal.color_id)
                  animal_color = color.color
              })
              this.state.images.forEach(image => {
                if (image.animal_id === animal.id)
                  animal_images.push(image.image)
              })

              return <Pet id={animal.id} key={animal.id} gender={animal.gender_id === 1 ? "M" : "F"} color={animal_color} age={animal.age} name={animal.name} imgSrc={animal_images[0]} />
            })
          }

          <div className="animals__grid__buttons">
            <a href="/animals/new" >
              <ControlPointIcon
                style={{ fontSize: "50px", margin: "22px", color: "#f9f9f9" }}
              />
            </a>
            <a href="/animals/edit" >
              <EditIcon
                style={{ fontSize: "50px", margin: "22px", color: "#f9f9f9" }}
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
