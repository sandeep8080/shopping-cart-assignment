import Modal from '../../components/modal/Modal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getCarouselItems } from '../../redux/action/carouselAction';
import CarouselContainer from '../../components/carousel/Carousel';
import { getCategoryData } from '../../redux/action/category';
import CategoryCard from '../../components/categoryCard/CategoryCard';
import Cart from '../cart/cart';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarouselItems());
    dispatch(getCategoryData());
  }, []);

  const resultCategories = useSelector(state => state.Categories.CategoriesItems);
  const openCart = useSelector(state => state.CartDetails.isOpen);
  // console.log(resultCategories);
  // console.log(openCart);
  return (
    <>
      <CarouselContainer />
      {
        (resultCategories || []).map((item, index) => {
          return <CategoryCard key={item.id} index={index} imageUrl='../../static/images/category/beverages.png' {...item} />
        })}
      {
        openCart && <Modal>
          <Cart />
        </Modal>
      }
    </>);
};

export default HomePage;
