import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//includes
import "./Assets/css/main.min.css";
import "./Assets/css/bootstrap/bootstrap-reboot.min.css";
import "./Assets/css/bootstrap/bootstrap-reboot.min.css";
import "./Assets/css/bootstrap/bootstrap.min.css";

//Pages
import Home from "./pages/homePage";
import Products from "./pages/products";
import AboutPage from "./pages/aboutPage";

//Javascript
// import "./Assets/js/vendor/jquery-2.2.4.min.js";
// import "./Assets/js/vendor/bootstrap.min.js";
// import "./Assets/js/easing.min.js";
// import "./Assets/js/hoverIntent.js";
// import "./Assets/js/superfish.min.js";
// import "./Assets/js/mn-accordion.js";
// import "./Assets/js/jquery.ajaxchimp.min.js";
// import "./Assets/js/jquery.magnific-popup.min.js";
// import "./Assets/js/owl.carousel.min.js";
// import "./Assets/js/jquery.nice-select.min.js";
// import "./Assets/js/isotope.pkgd.min.js";
// import "./Assets/js/jquery.circlechart.js";
// import "./Assets/js/mail-script.js";

import "./Assets/js/main.js";

function App() {
  return (
    <Router >
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/about-me" component={AboutPage} />
      </div>
    </Router>
  );
}

export default App;
