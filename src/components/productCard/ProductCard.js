import './ProductCard.css';
import Button from '../button/Button';
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCart } from '../../redux/action/cart';
import priceFromatter from '../../lib/priceFromatter';
const ProductCard = ({ name, price, description, imageURL, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('product clicked', id);
    dispatch(updateCart(id, 'add'));
  };

  let imgURL = `../../${imageURL}`;
  // imgURL = imgURL.replace(/([^:]\/)\/+/g, "$1");
  // const image = React.lazy(() => import (`${imgURL}`));
  // console.log(image);
  return (
    <article className='card-container'>
      <h6 className='card-header'>
        {name}
      </h6>
      <div className='content-container'>
        <img
          className='content-img'
          // src={require(`${imgURL}`).default}
          src={imageURL}
        />
        <div className='content'>
          <p className='content-desc'>{description}</p>
          <div className='content-footer'>
            <p>{priceFromatter(price)}</p>
            <Button btnText='Add To Cart' handleClick={() => handleClick(id)} />
          </div>
        </div>
      </div>
    </article>
  )
};

export default ProductCard;