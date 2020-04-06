import React from "react";
import { Link } from "react-router-dom";

// import { WOW } from 'wowjs';


class Header extends React.Component { 

  componentDidMount() {
    const WOW = require('wow.js');
    new WOW().init();
  }
  render() {
    return (
      <section className="home-banner-area">
        <div className="container">
          <div className="row fullscreen d-flex align-items-center">
            <div className="banner-content col-lg-6 col-md-12 justify-content-center ">
              <div
                className="me wow bounceIn"
                data-wow-duration="1s"
                data-wow-delay="1.2s"
              >
                It's me
              </div>
              <h1
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="1.7s"
              >
                Kenedy Jackson
              </h1>
              <div
                className="designation mb-50 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="2.1s"
              >
                Senior Creative
                <span className="designer">Designer</span>
                and Content
                <span className="developer">Developer</span>
              </div>
              <Link href="/products" className="primary-btn" data-text="Hire Me">
                <span>H</span>
                <span>i</span>
                <span>r</span>
                <span>e</span>
                <span> </span>
                <span>M</span>
                <span>e</span>
              </Link>
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
