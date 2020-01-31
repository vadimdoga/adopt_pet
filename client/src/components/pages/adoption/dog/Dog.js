import React from "react"
import dogImg1 from "../../../../assets/dog-adopt1.jpg"
import LinkComp from "../LinkComponent/LinkC"
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import "./css/Dog.css"
export default function Dog() {
  return (
    <div className="dog">
      <div className="dog__info">
        <h2>Adopting a Dog</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="dog__quote0">
        <FormatQuoteIcon fontSize="large" />
        <h4>“A dog is the only thing on earth that loves you more than he loves himself.” – <span>Josh Billings</span></h4>
      </div>
      <div className="dog__quote1">
        <FormatQuoteIcon fontSize="large" />
        <h4>“Dogs never bite me. Just humans.”  – <span>Marilyn Monroe</span></h4>
      </div>
      <img src={dogImg1} alt="dog image" />
      <div className="dog__links">
        <h3>Usefull links:</h3>
        <LinkComp
          title="Your Newly Adopted Dog"
          link="https://www.petfinder.com/dogs/bringing-a-dog-home/newly-adopted-dog/"
        />
        <LinkComp
          title="Dog Adoption Checklist"
          link="https://www.petfinder.com/pet-adoption/dog-adoption/dog-adoption-checklist/"
        />
        <LinkComp
          title="Understanding Pet Food Ingredients"
          link="https://www.petfinder.com/dogs/dog-nutrition/understanding-pet-food-ingredients/"
        />
        <LinkComp
          title="Others"
          link="/"
        />
        <LinkComp
          title="Others"
          link="/"
        />
        <LinkComp
          title="Others"
          link="/"
        />
        <LinkComp
          title="Others"
          link="/"
        />
        <LinkComp
          title="Others"
          link="/"
        />
        <LinkComp
          title="Others"
          link="/"
        />
      </div>
    </div>
  )
}
