import React from "react";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <header id="header">
		<div className="container main-menu">
			<div className="row align-items-center d-flex">
				<div id="logo">
					<Link to="index.html"><img  src={require("../../Assets/img/logo.png")} alt="" title="" /></Link>
				</div>
				<nav id="nav-menu-container">
					<ul className="nav-menu">
						<li className=""><Link className="active" to="index.html">Home</Link></li>
						<li><Link to="about.html">About</Link></li>
						<li><Link to="portfolio.html">Portfolio</Link></li>
						<li className="menu-has-children"><Link to="#">Pages</Link>
							<ul>
								<li><Link to="elements.html">Elements</Link></li>
								<li><Link to="contact.html">Contact</Link></li>
								<li><Link to="services.html">Service</Link></li>
								<li><Link to="portfolio-details.html">Portfolio Details</Link></li>
							</ul>
						</li>
						<li className="menu-has-children"><Link to="">Blog</Link>
							<ul>
								<li><Link to="blog-home.html">Blog Home</Link></li>
								<li><Link to="blog-single.html">Blog Single</Link></li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
  );
}

export default MainNavbar;
