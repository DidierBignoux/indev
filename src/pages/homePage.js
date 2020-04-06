import React from "react";

//Navigation
import MainNavbar from "../componets/Navbars/navbar";

//Componets
import Header from "../componets/Header/header";
import Footer from "../componets/Footer/footer";

//Section
import Brand from "../Section/Brand/brand";
import About from "../Section/About/about";
import Work from "../Section/Work/work";
import WorkExample from "../Section/Work/workExample";
import JobHistory from "../Section/Job/jobHistory";
import Service from "../Section/Service/service";


function Home() {
  return (
    <div >
       <MainNavbar />
      <Header />
      <Brand />
      <About />
      <Work />
      <WorkExample />
      <JobHistory />
      <Service />
     

      <Footer />
    </div>
  );
}

export default Home;
