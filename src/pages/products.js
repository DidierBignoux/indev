import React from 'react';

//Navigation
import MainNavbar from "../componets/Navbars/navbar";

//Componets
import Banner from "../componets/Header/banner";
import Footer from "../componets/Footer/footer";


class Products extends React.Component {
  render() {
    return (
      <div >
      <MainNavbar />
     <Banner name={'Torma'} />
     
     {/* <h1>Hello, {this.props.name}</h1> */}
  
     <Footer />
   </div>
    );
  }
}




export default Products;
