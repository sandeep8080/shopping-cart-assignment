import cartImage from '../../static/images/cart.svg'
import './CartButton.css';

const CartButton = ({cartItems}) => {
  return (
    <div className='button-wrapper'>
      <img className='cart-image' src={cartImage} alt='Cart-Icon' />
      <div className='cart-items'>{cartItems}</div>
    </div>
  );
};

export default CartButton;
