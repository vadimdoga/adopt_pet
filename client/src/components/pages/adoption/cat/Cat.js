import React from "react"
import catImg1 from "../../../../assets/cat-adopt.jpg"
import LinkComp from "../LinkComponent/LinkC"
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import "./css/Cat.css"
export default function Cat() {
  return (
    <div className="cat">
      <div className="cat__info">
        <h2>Adopting a Cat</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="cat__quote0">
        <FormatQuoteIcon fontSize="large" />
        <h4>“Time spent with cats is never wasted.” – <span>Sigmund Freud</span></h4>
      </div>
      <div className="cat__quote1">
        <FormatQuoteIcon fontSize="large" />
        <h4>“Cats choose us; we don’t own them.” – <span>Kristin Cast</span></h4>
      </div>
      <img src={catImg1} alt="cat image" />
      <div className="cat__links">
        <h3>Usefull links:</h3>
        <LinkComp
          title="Tips for the First 30 Days of Cat Adoption"
          link="https://www.petfinder.com/cats/bringing-a-cat-home/tips-for-first-30-days-cat/"
        />
        <LinkComp
          title="Why Does My Cat Scratch Everything?"
          link="https://www.petfinder.com/cats/cat-problems/why-cat-scratches-furniture/"
        />
        <LinkComp
          title="Wet vs. Dry Food For Cats"
          link="https://www.petfinder.com/cats/cat-nutrition/wet-vs-dry-cat-food-whats-better-cat/"
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
