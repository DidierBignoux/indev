import React from 'react';

//Navigation
import MainNavbar from "../componets/Navbars/navbar";

//Componets
import Banner from "../componets/Header/banner";
import Footer from "../componets/Footer/footer";


class AboutPAge extends React.Component {
  render() {
    return (
      <div >
      <MainNavbar />
     <Banner name={'About'} />
     
     {/* <h1>Hello, {this.props.name}</h1> */}
  
     <Footer />
   </div>
    );
  }
}




export default AboutPAge;
