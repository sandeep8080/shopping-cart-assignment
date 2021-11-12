import './Button.css';

const Button = ({ btnText, handleClick }) => {
  return (
    <button className='button-style' onClick={handleClick}>{btnText} </button>
  )
};

export default Button;