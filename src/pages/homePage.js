import React from "react";

//Componets
import Header from "../componets/Header/header";
import Footer from "../componets/Footer/footer";
import Brand from "../componets/Brand/brand";

import MainNavbar from "../componets/Navbars/navbar";

function Home() {
  return (
    <div className="container">
       <MainNavbar />
      <Header />
      <Brand />
     

      <Footer />
    </div>
  );
}

export default Home;
