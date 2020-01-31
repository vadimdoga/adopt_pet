import React from "react"
import petsBack from "../../../assets/pets.jpg"
import AssistantPhotoRoundedIcon from '@material-ui/icons/AssistantPhotoRounded';
import "./css/How.css"

export default function How() {
  return (
    <div className="How">
      <img src={petsBack} alt="pets background" />
      <div className="How--border">
        <h1>How It Works?</h1>
        <div className="How--border__container">
          <div className="How--border__container__el">
            <h3><AssistantPhotoRoundedIcon fontSize="large" /> Use our website’s search to find pets for adoption!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="How--border__container__el">
            <h3><AssistantPhotoRoundedIcon fontSize="large" /> How to adopt a pet</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="How--border__container__el">
            <h3><AssistantPhotoRoundedIcon fontSize="large" /> Adopting from a Rescue</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="How--border__container__el">
            <h3><AssistantPhotoRoundedIcon fontSize="large" /> Adopting from a Shelter</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
