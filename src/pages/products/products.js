import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  console.log(` product comp : ${id}`);

  const productsData = useSelector(data => data.Products.products);
  const sideBarData = useSelector(data => {
    const listItems = data.Categories.CategoriesItems;
    const activeListItems = listItems.filter(item => item.enabled === true);
    return activeListItems;
  });

  const openCart = useSelector(state => state.CartDetails.isOpen);
  const [fProductData, setFProductData] = useState([]);

  useEffect(() => {
    dispatch(getProductsData());
    dispatch(getCategoryData());
  }, []);

  useEffect(() => {
    if (id) {
      filterDataByCategory(id);
    } else {
      setFProductData(productsData);
    }
  }, [productsData, id]);

  // Function to filter out the data based on category
  const filterDataByCategory = (id) => {
    const filterData = productsData.filter(item => item.category === id);
    setFProductData(filterData);
  };

  const handleClickProduct = (id) => {
    filterDataByCategory(id);
    router.push(`/products/${id}`);
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
