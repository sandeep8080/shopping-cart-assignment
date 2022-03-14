import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import SideBar from "../../components/sideBar/SideBar";
import { getProductsData } from "../../redux/action/products";
import ProductCard from '../../components/productCard/ProductCard';
import './products.css';
import { getCategoryData } from "../../redux/action/category";
import Cart from "../cart/cart";
import Modal from '../../components/modal/Modal';
import { useHistory, useParams } from "react-router";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const router = useHistory();
  const { id } = useParams();
  console.log(`Product Page is rendered :product comp : ${id}`);

  const productsData = useSelector(data => data.Products.products);

  /**
   * shallowEqual is used to avoid the re-rendering the Product page
   * Reason - activeListItem is returned new reference everytime. Which forces the useSelector to force a re-render
   */

  const sideBarData = useSelector(data => {
    const listItems = data.Categories.CategoriesItems;
    const activeListItems = listItems.filter(item => item.enabled === true);
    return activeListItems;
  }, shallowEqual);
  const openCart = useSelector(state => state.CartDetails.isOpen);

  const filterData = productsData.filter(item => item.category === id);
  // Setting the data based on the id.
  const productPageData = id ? filterData : productsData;

  const [fProductData, setFProductData] = useState(productPageData);

  useEffect(() => {
    dispatch(getProductsData());
    dispatch(getCategoryData());
  }, []);

  // Function to filter out the data based on category
  const filterDataByCategory = (id) => {
    console.log('filterDataByCategory called')
    const filterData = productsData.filter(item => item.category === id);
    setFProductData(filterData);
  };

  const handleClickProduct = useCallback((id) => {
    filterDataByCategory(id);
    router.push(`/products/${id}`);
  }, [id]);

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
