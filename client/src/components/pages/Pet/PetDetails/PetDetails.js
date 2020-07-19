import React, { Component } from 'react'
import "./css/PetDetails.css"
import Cookies from "universal-cookie"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import rq from '../../../../axios'
const cookies = new Cookies()

export default class PetDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      animal: {},
      animalImages: [{ image: null }],
      animalGender: "",
      animalColor: "",
      animalBreed: "",
      animalHairType: "",
      animalGoodThings: [],
      animalBadThings: [],
      userNumber: ""
    }
  }
  componentDidMount() {
    const { match: { params } } = this.props;
    const user_id = cookies.get("user_id")

    const fetchData = async () => {
      const getDetailsFromId = (animalBreeds, animalColors, animalHairTypes, animal) => {
        let breed;
        let color;
        let hairType;
        const gender = animal.gender_id === 1 ? "M" : "F"

        animalBreeds.forEach(el => {
          if (el.id === animal.breed_id)
            breed = el.breed
        })

        animalColors.forEach(el => {
          if (el.id === animal.color_id)
            color = el.color
        })
        animalHairTypes.forEach(el => {
          if (el.id === animal.hair_type_id)
            hairType = el.hair_type
        })


        return {breed, color, hairType, gender}
      }

      const result = await rq.get(`/animals/animal/${params.id}`)
      const resultImages = await rq.get(`/animals/images/${params.id}`)
      const resultDetails = await rq.get(`/animals/details`)
      const resultHabbits = await rq.get(`/animals/habbits/${params.id}`)
      const resultUserDetails = await rq.get(`/users/${user_id}`)

      const animal = result.data.data[0]
      const animalImages = resultImages.data.data

      const animalBreeds = resultDetails.data.details.breeds
      const animalColors = resultDetails.data.details.colors
      const animalHairTypes = resultDetails.data.details.hair_types

      const details = getDetailsFromId(animalBreeds, animalColors, animalHairTypes, animal)

      this.setState({
        animal: animal,
        animalImages: animalImages,
        animalGender: details.gender,
        animalColor: details.color,
        animalBreed: details.breed,
        animalHairType: details.hairType,
        animalGoodThings: resultHabbits.data.good_things,
        animalBadThings: resultHabbits.data.bad_things,
        userNumber: resultUserDetails.data.data[0].phone_number
      })
    }

    fetchData()
  }
  render() {
    const handleImg = e => {
      const imgSrc = e.target.src
      const imgExp = document.querySelector("#expandedImg")
      imgExp.src = imgSrc
    }
    return (
      <div className="petDetails">
      <h2>About Me</h2>
      <div className="petDetails__container">
        <div className="petDetails__container__img">
          <h1>My name is {this.state.animal.name}</h1>
          <img src={this.state.animalImages[0].image} id="expandedImg" alt="expandedImg" />
        </div>
        <div className="petDetails__container__el">
          {
              this.state.animalImages.map((el, index) => {
                return <img
                  key={el.id}
                  onClick={handleImg}
                  src={el.image}
                  alt={`animal-image-${index}`}
                  tabIndex="0"
                />
           })
          }
        </div>
      </div>
      <div className="petDetails__facts">
        <h4>Facts About Me:</h4>
        <p><span className="font-weight-bold">Breed: </span> {this.state.animalBreed} </p>
        <p><span className="font-weight-bold">Color: </span> {this.state.animalColor} </p>
        <p><span className="font-weight-bold">Age: </span> {this.state.animal.age} </p>
        <p><span className="font-weight-bold">Sex: </span> {this.state.animalGender} </p>
        <p><span className="font-weight-bold">Hair: </span> {this.state.animalHairType} </p>
      </div>
      <div className="petDetails__info">
        <h4>My Information:</h4>
        <p className="petDetails__info--phone"><span className="font-weight-bold">Phone number:</span> {this.state.userNumber} </p>
        <p className="font-weight-bold">Good things <ThumbUpIcon fontSize="small" style={{color: "white"}} /></p>
        <div className="petDetails__info--behaviour">
          {
            this.state.animalGoodThings.map(el => {
              return <p><FiberManualRecordIcon key={el.id} style={{color: "white", fontSize: "10px"}} /> {el.good_thing} </p>
            })
          }
        </div>
        <p className="font-weight-bold">Bad things <ThumbDownIcon fontSize="small" style={{color: "white"}} /></p>
        <div className="petDetails__info--behaviour">
          {
            this.state.animalBadThings.map(el => {
              return <p><FiberManualRecordIcon key={el.id} style={{color: "white", fontSize: "10px"}} /> {el.bad_thing} </p>
            })
          }
        </div>
      </div>
      <div className="petDetails__story">
        <h4>My Story:</h4>
        <p> {this.state.animal.description} </p>
      </div>
    </div>
    )
  }
}

