import './CartItem.css';
import test2 from '../../static/images/products/fruit-n-veg/kiwi-green.jpg';
import { updateCart } from '../../redux/action/cart';
import { useDispatch } from 'react-redux';
import priceFromatter from '../../lib/priceFromatter';

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, count, price, id } = product;
  return (
    <div className='cartItem-container'>
      <div className='cartItem-content'>
        <img
          //src={imageUrl}
          src={test2}
          width="60px"
          height="60px"
          alt="image"
        />
        <div className='cart-content'>
          <h6 className="cartItem-name">{name}</h6>
          <div className='item'>
            <button onClick={() => dispatch(updateCart(id, 'remove'))} className='cart-btn'>-</button>
            <p className='cartItem-text'>{count}</p>
            <button onClick={() => dispatch(updateCart(id, 'add'))} className='cart-btn'>+</button>
            <p className='cartItem-text'>&times;{priceFromatter(price)}</p>
          </div>
        </div>
      </div>
      <p className='cartItem-total'>{priceFromatter(count * price)}</p>
    </div >
  )
};

export default CartItem;