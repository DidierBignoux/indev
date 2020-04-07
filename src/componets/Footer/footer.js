import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebook, faTwitter, faBehance } from "@fortawesome/free-brands-svg-icons";

// free-brands-svg-icons

const socialIcon = [
  {
    id: "a",
    title: "Facebook",
    font:  [
      faFacebook
    ],
    url: "/"
  },
  {
    id: "b",
    title: "Twitter",
    font:  [
      faTwitter
    ],
    url: "/"
  },
  {
    id: "c",
    title: "Behance",
    font:  [
      faBehance
    ],
    url: "/"
  },
];

function Footer() {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="footer-top flex-column">
              <div className="footer-logo">
                <Link to="/#">
                  <img src={require("../../Assets/img/logo.png")} alt="" />
                </Link>
                <h4>Follow Me</h4>
              </div>
              {/* <div className="footer-social">
							<Link to ="#"><i className="fa fa-facebook"></i><Link />
							<Link to ="#"><i className="fa fa-twitter"></i><Link />
							<Link to ="#"><i className="fa fa-dribbble"></i><Link />
							<Link to ="#"><i className="fa fa-behance"></i><Link />
						</div> */}

              <div className="footer-social">                
                {socialIcon.map((icon) => (
                  <Link key={icon.id} to={icon.url}>
                    <FontAwesomeIcon className="icone" icon={icon.font[0]} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-bottom justify-content-center">
          <p className="col-lg-8 col-sm-12 footer-text">
            Copyright &copy; {new Date().getFullYear()} All rights reserved |
            This website is made with
            <Link to ="/#">
                <img className="mx-auto react-logo" src={require("../../Assets/img/elements/react.svg")} alt="" />
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
