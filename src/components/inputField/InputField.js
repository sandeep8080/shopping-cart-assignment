import './InputField.css';

const InputField = ({
  type,
  name,
  isrequired,
  value,
  label
}) => {
  return (
    <>
      <div className='input-container'>
        <input
          type={type}
          name={name}
          required={isrequired}
          // onChange={(e) => { handleForm(e); handleError(e, regex) }}
          value={value}
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