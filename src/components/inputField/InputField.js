import './InputField.css';

const InputField = ({
  type,
  name,
  isrequired,
  value,
  label,
  handleChange
}) => {
  return (
    <>
      <div className='input-container'>
        <input
          type={type}
          name={name}
          required={isrequired}
          value={value}
          onChange={handleChange}
        />
        <label className="label-name">
          <span className="content-name">
            {label}
          </span>
        </label>
      </div>
    </>
  )
};

export default InputField;