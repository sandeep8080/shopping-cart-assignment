import cartImage from '../../static/images/cart.svg'
import './CartButton.css';

const CartButton = ({ cartItems, handleCartClick }) => {
  return (
    <div className='button-wrapper' onClick={handleCartClick}>
      <img className='cart-image' src={cartImage} alt='Cart-Icon' />
      <div className='cart-items'>{cartItems}</div>
    </div>
  );
};

export default CartButton;
