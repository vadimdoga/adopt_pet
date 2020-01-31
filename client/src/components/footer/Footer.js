import React, { Component } from "react"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import PinterestIcon from "@material-ui/icons/Pinterest"
import TwitterIcon from "@material-ui/icons/Twitter"
import "./css/Footer.css"

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer" className=" footer bg-light text-dark-50">
        <div className="container footer__textContainer">
          <div className="footer__textContainer__description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="footer__textContainer__contacts">
            <h4>Contacts</h4>
            <p className="font-weight-bold">Address:</p>
            <p>2113 N Bahama Ave Los Angeles, CA 90059 USA</p>
            <p className="font-weight-bold">Email:</p>
            <p>adoptpet@gmail.com</p>
            <p className="font-weight-bold">Phones:</p>
            <p>+1-202-555-0117</p>
          </div>
          <div className="footer__textContainer__links">
            <h4>Links</h4>
            <a href="/">Find Pet</a>
          </div>
        </div>
        <div className="container text-right footer__iconContainer">
          <a href="https://www.facebook.com/">
            <FacebookIcon className="footer__iconContainer__icon" fontSize="large" />
          </a>
          <a href="https://www.instagram.com/">
            <InstagramIcon className="footer__iconContainer__icon" fontSize="large" />
          </a>
          <a href="https://www.pinterest.com/">
            <PinterestIcon className="footer__iconContainer__icon" fontSize="large" />
          </a>
          <a href="https://www.twitter.com/">
            <TwitterIcon className="footer__iconContainer__icon" fontSize="large" />
          </a>
        </div>
        <div style={{padding: "5px"}} className="container text-center" id="copyright">
          <small>Copyright &copy; 2020 Adopt Pet. All Rights Reserved.</small>
        </div>
      </footer>
    )
  }
}
