import React from "react"
import "./css/PetDetails.css"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export default function PetDetails() {
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
          <h1>My name is Tyson!</h1>
          <img src="https://pet-uploads.adoptapet.com/1/f/0/352561195.jpg" id="expandedImg" alt="expandedImg" />
        </div>
        <div className="petDetails__container__el">
          <img
            onClick={handleImg}
            src="https://pet-uploads.adoptapet.com/1/f/0/352561195.jpg"
            alt="main-img"
            tabIndex="0"
          />
          <img
            onClick={handleImg}
            src="https://pet-uploads.adoptapet.com/f/f/8/352561201.jpg"
            alt="another img"
            tabIndex="0"
          />
          <img
            onClick={handleImg}
            src="https://pet-uploads.adoptapet.com/f/f/8/352561201.jpg"
            alt="another img"
            tabIndex="0"
          />
          <img
            onClick={handleImg}
            src="https://pet-uploads.adoptapet.com/f/f/8/352561201.jpg"
            alt="another img"
            tabIndex="0"
          />
        </div>
      </div>
      <div className="petDetails__facts">
        <h4>Facts About Me:</h4>
        <p><span className="font-weight-bold">Breed: </span> asdasd</p>
        <p><span className="font-weight-bold">Color: </span> asdfadsfa</p>
        <p><span className="font-weight-bold">Age: </span> afasdfasdfa</p>
        <p><span className="font-weight-bold">Sex: </span> asdfasdfa</p>
        <p><span className="font-weight-bold">Hair: </span> afasdfs</p>
      </div>
      <div className="petDetails__info">
        <h4>My Information:</h4>
        <p className="petDetails__info--phone"><span className="font-weight-bold">Phone number:</span>+37512388</p>
        <p className="font-weight-bold">Good things <ThumbUpIcon fontSize="small" style={{color: "white"}} /></p>
        <div className="petDetails__info--behaviour">
          <p><FiberManualRecordIcon style={{color: "white", fontSize: "10px"}} /> Good with kids</p>
          <p><FiberManualRecordIcon style={{color: "white", fontSize: "10px"}} /> Energetic</p>
        </div>
        <p className="font-weight-bold">Bad things <ThumbDownIcon fontSize="small" style={{color: "white"}} /></p>
        <div className="petDetails__info--behaviour">
          <p><FiberManualRecordIcon style={{color: "white", fontSize: "10px"}} /> Eat flowers</p>
          <p><FiberManualRecordIcon style={{color: "white", fontSize: "10px"}} /> Sleep a lot</p>
        </div>
      </div>
      <div className="petDetails__story">
        <h4>My Story:</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel
          eros varius, volutpat nisl vitae, finibus ipsum. Phasellus semper
          rutrum ex sed gravida. Ut ut sagittis sapien, nec consequat erat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque
          lacus, pharetra eget hendrerit vel, viverra in lacus. Fusce efficitur
          laoreet magna, sed vestibulum lectus porta vehicula. Donec at aliquam
          orci. Etiam gravida nisl in semper sodales. Aenean quis lacinia leo.
          Vivamus nec purus malesuada diam elementum tristique. Nullam
          tincidunt, metus sit amet laoreet rutrum, elit diam dictum est, vel
          bibendum magna dolor non nibh. Vestibulum aliquet quis sem eget
          posuere. Proin molestie mollis malesuada. Sed efficitur tempor risus,
          ut aliquam ipsum vulputate at. In convallis ut nulla eu cursus. Nulla
          dignissim suscipit bibendum. Nullam ipsum purus, gravida vel feugiat
          volutpat, sodales vitae dolor. Quisque quis vehicula tortor, vel
          porttitor massa. Pellentesque nec lacus rutrum, finibus risus vel,
          condimentum velit. Praesent fermentum suscipit ipsum fringilla varius.
          Cras vel leo ornare, suscipit diam sed, aliquam mi. Ut ultrices lectus
          in erat tristique, a efficitur sem finibus. Etiam rutrum dui eu dui
          congue facilisis sed faucibus purus. Phasellus et justo ut justo
          tempus gravida. Nullam facilisis id nibh vitae dapibus.{" "}
        </p>
      </div>
    </div>
  )
}
