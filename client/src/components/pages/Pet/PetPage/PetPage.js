import React from "react"
import "./css/PetPage.css"

export default function PetPage() {
  const handleImg = e => {
    const imgSrc = e.target.src
    const imgExp = document.querySelector("#expandedImg")
    imgExp.src = imgSrc
  }
  return (
    <div className="petPage">
      <div className="petPage__container">
        <div className="petPage__container__img">
          <h3>My name is Tyson!</h3>
          <hr />
          <img src="https://pet-uploads.adoptapet.com/1/f/0/352561195.jpg" id="expandedImg" alt="expandedImg" />
        </div>
        <div className="petPage__container__el">
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
      <div className="petPage__facts">
        <h4>Facts About Me:</h4>
        <hr />
        <p><span className="font-weight-bold">Breed: </span> asdasd</p>
        <p><span className="font-weight-bold">Color: </span> asdfadsfa</p>
        <p><span className="font-weight-bold">Age: </span> afasdfasdfa</p>
        <p><span className="font-weight-bold">Sex: </span> asdfasdfa</p>
        <p><span className="font-weight-bold">Hair: </span> afasdfs</p>
      </div>
      <div className="petPage__info">
        <h4>My Info:</h4>
        <hr />
        <p className="font-weight-bold">Good things</p>
        <p className="font-weight-bold">Bad things</p>
      </div>
      <div className="petPage__story">
        <h4>My Story:</h4>
        <hr />
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
