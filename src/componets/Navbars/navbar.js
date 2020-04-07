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
						<li className=""><Link className="active" to ="/products">Accueil</Link></li>
						<li><Link to ="/about-me">About</Link></li>
						<li><Link to ="portfolio.html">Portfolio</Link></li>
						<li className="menu-has-children"><Link to ="#">Pages</Link>
							<ul>
								<li><Link to ="/">Elements</Link></li>
								<li><Link to ="/">Contact</Link></li>
								<li><Link to ="/">Service</Link></li>
								<li><Link to ="/">Portfolio Details</Link></li>
							</ul>
						</li>
						<li className="menu-has-children"><Link to ="">Blog</Link>
							<ul>
								<li><Link to ="/">Blog Home</Link></li>
								<li><Link to ="/">Blog Single</Link></li>
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
