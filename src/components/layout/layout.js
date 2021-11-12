import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { countTotal } from "../../functions/cartHelpers";
import { toggleCart } from "../../redux/action/cart";
// import { Link } from "react-router-dom";
import HeaderLogo from "../../static/images/logo_2x.png";
import CartButton from "../button/CartButton";
import Footer from "../footer/Footer";
import NavLink from "../navbar/navBar";
import "./layout.css";

const PageLayout = ({ children }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(data => data.CartDetails.cartItems);
  const totalCartItems = countTotal(cartItems);
  
  // Handling Cart Button
  const handleCartClick = () => {
    //console.log('Cart Btn clicked');
    dispatch(toggleCart(true));
  };

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
        <NavLink path="/" name="Home" />
        <NavLink path="/products" name="Products" />
        {/* </section> */}

        <section className="right-container">
          <div className='cred-container'>
            <NavLink path="/signin" name="SignIn" />
            <NavLink path="/newuser" name="Register" />
          </div>
          <CartButton cartItems={`${totalCartItems} items`} handleCartClick={handleCartClick} />
        </section>
      </header>
      <main>{children}</main>
      <Footer footerText='Copyright @ 2020-2021 Sabka Bazaar Grocery Supplies Pvt. ltd' />
    </div>
  );
};

export default PageLayout;
