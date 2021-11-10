import React from "react";
// import { Link } from "react-router-dom";
import HeaderLogo from "../../static/images/logo_2x.png";
import CartButton from "../button/CartButton";
import Footer from "../footer/Footer";
import NavLink from "../navbar/navBar";
import "./layout.css";

const totalCartItems = 0; // TODO -- cart items logic
const PageLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <header>
        <section className="img-container">
          <img
            src={HeaderLogo}
            alt="Sabka Bazar"
            width="250px"
            height="100px"
          />
        </section>
        {/* <section> */}
        <NavLink path="/home" name="Home" />
        <NavLink path="/products" name="Products" />
        {/* </section> */}

        <section className="right-container">
          <div className='cred-container'>
            <NavLink path="/" name="SignIn" />
            <NavLink path="/newuser" name="Register" />
          </div>
          <CartButton cartItems={`${totalCartItems} items`} />
        </section>
      </header>
      <main className="layout-main">{children}</main>
      <Footer footerText='Copyright @ 2020-2021 Sabka Bazaar Grocery Supplies Pvt. ltd'/>
    </div>
  );
};

export default PageLayout;
