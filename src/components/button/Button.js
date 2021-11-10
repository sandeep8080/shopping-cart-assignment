import './Button.css';

const Button = ({ btnText }) => {
  return (
    <button className='button-style'>{btnText} </button>
  )
};

export default Button;