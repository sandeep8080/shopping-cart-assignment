import './Button.css';

const Button = ({ btnText, type = 'button', handleClick }) => {
  return (
    <button
      className='button-style'
      type={type}
      onClick={handleClick}
    >
      {btnText}
    </button>
  )
};

export default Button;