import React, { Component } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import './css/Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="py-4 bg-light text-dark-50">
        <div className="container footer__textContainer">
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="container text-right footer__iconContainer">
          <a href="https://www.facebook.com/"><FacebookIcon color="secondary" fontSize="large" /></a>
          <a href="https://www.instagram.com/"><InstagramIcon color="secondary" fontSize="large" /></a>
          <a href="https://www.pinterest.com/"><PinterestIcon color="secondary" fontSize="large" /></a>
          <a href="https://www.twitter.com/"><TwitterIcon color="secondary" fontSize="large" /></a>
        </div>
        <div className="container text-center" id="copyright">
          <small>Copyright &copy; Your Website</small>
        </div>
      </footer>
    )
  }
}
