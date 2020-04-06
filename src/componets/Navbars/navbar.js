import React from "react";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <header id="header">
		<div className="container main-menu">
			<div className="row align-items-center d-flex">
				<div id="logo">
					<Link to="/"><img  src={require("../../Assets/img/logo.png")} alt="" title="" /></Link>
				</div>
				<nav id="nav-menu-container">
					<ul className="nav-menu">
						<li className=""><Link className="active" href="/products">Accueil</Link></li>
						<li><Link href="/">About</Link></li>
						<li><Link href="portfolio.html">Portfolio</Link></li>
						<li className="menu-has-children"><Link href="#">Pages</Link>
							<ul>
								<li><Link href="elements.html">Elements</Link></li>
								<li><Link href="contact.html">Contact</Link></li>
								<li><Link href="services.html">Service</Link></li>
								<li><Link href="portfolio-details.html">Portfolio Details</Link></li>
							</ul>
						</li>
						<li className="menu-has-children"><Link href="">Blog</Link>
							<ul>
								<li><Link href="blog-home.html">Blog Home</Link></li>
								<li><Link href="blog-single.html">Blog Single</Link></li>
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
