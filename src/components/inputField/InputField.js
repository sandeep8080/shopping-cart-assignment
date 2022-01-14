import './InputField.css';
import { ErrorMessage } from 'formik';

/**
 * ! Either use Formik Componets or custom components for error message display 
 */
const InputField = ({
  type,
  name,
  isrequired,
  value,
  label,
  handleChange,
  handleBlur,
  errors,
  touched
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
          onBlur={handleBlur}
        />
        <label className="label-name">
          <span className="content-name">
            {label}
          </span>
        </label>
      </div>
      <div>
        {touched[name] && errors[name] ? (
          // <ErrorMessage name={name} />
          <div className='form-error'> {errors[name]}</div>
        )
          : null
        }
      </div>
    </>
  )
};

export default InputField;