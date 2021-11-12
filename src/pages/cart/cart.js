import Button from '../../components/button/Button';
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/cart/CartItem";
import { countFinalPrice, countTotal } from "../../functions/cartHelpers";
import lwImage from '../../static/images/lowest-price.png';

import './cart.css';
import { toggleCart } from '../../redux/action/cart';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(data => data.CartDetails.cartItems);

  const totalCount = countTotal(cartItems);
  const totalPrice = countFinalPrice(cartItems);

  console.log(cartItems);
  console.log(totalCount);
  console.log(totalPrice);

  return (
    <>
      <div className='cart-container'>
        {
          totalCount > 0 && (
            <>
              <div className='cart-item'>
                {cartItems.map((item, index) => (
                  <CartItem product={item} key={index} />
                ))}
              </div>
              <div className='cart-discount-wrapper'>
                <img
                  src={lwImage}
                  alt='Lowest-price-image' />
                <p className='cart-message'>You won't find it cheaper anywhere</p>
              </div>
            </>
          )}
      </div>
      {
        totalCount < 1 && (
          <div className='cart-noItem'>
            <p className='cart-message'>No items in your cart</p>
            <p className='cart-message'>Your favourite items are just a click away</p>
          </div>
        )
      }
      <div className='cartFooter-container'>
        {totalCount > 0 && <p className='cart-message'>Promo code can be applied on payment page</p>}
        <div className='cartFooter-content'>
          {totalCount > 0 ?
            <>
              <p className='cart-message' onClick={() => { dispatch(toggleCart(false)) }}>Proceed to Checkout</p>
              <p className='cart-message'>{`Rs. ${totalPrice}`}</p>
            </>
            : <p className='cart-message' onClick={() => dispatch(toggleCart(false))} >Start Shopping</p>
          }
        </div>
      </div>
    </>
  )
};

export default Cart;