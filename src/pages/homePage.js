import React from "react";

//Componets
import Header from "../componets/Header/header";
import Footer from "../componets/Footer/footer";

//Section
import Brand from "../Section/Brand/brand";
import About from "../Section/About/about";

import MainNavbar from "../componets/Navbars/navbar";

function Home() {
  return (
    <div className="container">
       <MainNavbar />
      <Header />
      <Brand />
      <About />
     

      <Footer />
    </div>
  );
}

export default Home;
