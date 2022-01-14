import { useDispatch } from 'react-redux';
import { toggleCart } from '../../redux/action/cart';
import './Modal.css';

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(toggleCart(false));
  };

  return (
    <section className='modal-wrapper'>
      <div className='modal-content'>
        <header className='modal-header'>
          <div className='modal-title'>
            My Cart
          </div>
          <span className='modal-close-btn' onClick={handleCloseModal}>&times;</span>
        </header>
        {children}
      </div>
    </section>
  )
};

export default Modal;