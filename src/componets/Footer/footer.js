import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="footer-top flex-column">
              <div className="footer-logo">
                <Link href="#">
                  <img src={require("../../Assets/img/logo.png")} alt="" />
                </Link>
                <h4>Follow Me</h4>
              </div>
              {/* <div className="footer-social">
							<Link href="#"><i className="fa fa-facebook"></i><Link />
							<Link href="#"><i className="fa fa-twitter"></i><Link />
							<Link href="#"><i className="fa fa-dribbble"></i><Link />
							<Link href="#"><i className="fa fa-behance"></i><Link />
						</div> */}

              <div className="footer-social">
                <Link to="/any-url">
                  <FontAwesomeIcon className='icone' icon={faFacebook} />
                </Link>
              </div>


            </div>
          </div>
        </div>
        {/* <div className="row footer-bottom justify-content-center">
				<p className="col-lg-8 col-sm-12 footer-text">					
Copyright  All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <Link href="https://colorlib.com" target="_blank">Colorlib<Link />
</p>
			</div> */}
      </div>
    </footer>
  );
}

export default Footer;
