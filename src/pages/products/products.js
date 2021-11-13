import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../../components/sideBar/SideBar";
import { getProductsData } from "../../redux/action/products";
import ProductCard from '../../components/productCard/ProductCard';
import './products.css';
import { getCategoryData } from "../../redux/action/category";
import Cart from "../cart/cart";
import Modal from '../../components/modal/Modal';

const ProductsPage = () => {
  const dispatch = useDispatch();

  const productsData = useSelector(data => data.Products.products);
  const sideBarData = useSelector(data => {
    const listItems = data.Categories.CategoriesItems;
    const activeListItems = listItems.filter(item => item.enabled === true);
    return activeListItems;
  });
  // console.log(sideBarData);

  const openCart = useSelector(state => state.CartDetails.isOpen);
  const [fProductData, setFProductData] = useState([]);

  useEffect(() => {
    dispatch(getProductsData());
    dispatch(getCategoryData());
  }, []);

  useEffect(() => {
    setFProductData(productsData)
  }, [productsData]);

  const handleClickProduct = (id) => {
    const filterData = productsData.filter(item => item.category === id);
    setFProductData(filterData);
  };

  return (
    <div className='product-main'>
      <SideBar
        sideBarData={sideBarData}
        handleClickProduct={handleClickProduct}
      />
      <div className='product-container'>
        <div className='product-row'>
          {
            (fProductData).map((product) => {
              return (
                <div key={product.id} className='card-wrapper' >
                  <ProductCard key={product.id} {...product} />
                </div>
              )
            })
          }
        </div>
      </div>
      {
        openCart &&
        <Modal>
          <Cart />
        </Modal>
      }
    </div >

  )
};

export default ProductsPage;
