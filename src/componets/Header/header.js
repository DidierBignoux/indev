import React from "react";
// import { Link } from "react-router-dom";

import ReactWOW from "react-wow";


class Header extends React.Component {
onClick =() =>{
  window.location.reload()
}
  render() {
    return (
      <section className="home-banner-area">
        <div className="container">
          <div className="row fullscreen d-flex align-items-center">
            <div className="banner-content col-lg-6 col-md-12 justify-content-center ">
              <ReactWOW animation="bounceIn" duration="1s" delay="1.2s">
                <div className="me">It's me</div>
              </ReactWOW>
              <ReactWOW animation=" fadeInUp" duration="1s" delay="1.7s">
                <h1>Kenedy Jackson</h1>
              </ReactWOW>

              <ReactWOW
              animation="fadeInUp"
              duration="1s"
              delay="2.1s"
              >
              <div
                className="designation mb-50"                
              >
                Senior Creative
                <span className="designer">Designer</span>
                and Content
                <span className="developer">Developer</span>
              </div>

              </ReactWOW>

          
              <button className="primary-btn" data-text="Hire Me" onClick={this.onClick}>
                <span>H</span>
                <span>i</span>
                <span>r</span>
                <span>e</span>
                <span> </span>
                <span>M</span>
                <span>e</span>
              </button>
            </div>
            <div className="banner-img col-lg-6 col-md-6 align-self-end">
              <img
                className="img-fluid"
                src={require("../../Assets/img/banner-img.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Header;
