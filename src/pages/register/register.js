import FormStyle from '../../components/form/Form';
import InputField from '../../components/inputField/InputField';
import './register.css';
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/action/user";
import useForm from "../../lib/useForm";

const RegisterPage = () => {
  const router = useHistory();
  const dispatch = useDispatch();

  const { inputData, handleInputChange, clearForm } = useForm({
    first_name: "",
    last_name: "",
    email: '',
    password: '',
    confirm_password: ''
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (inputData.password === inputData.confirm_password) {
      //console.log(registerUser);
      console.log('User is Registered Now');
      dispatch(addUser(inputData));
      router.push('/signin');
    } else {
      console.log('Password Mismatch !!...');
      // ToDO : Clear Form 
    }
  };

  return (
    <section className='register-wrapper'>
      <article className='register-container'>
        <h3>SignUp</h3>
        <div>We do not share your personal details</div>
      </article>
      <div className='register-container'>
        <FormStyle>
          <form method='POST' onSubmit={handleOnSubmit}>
            <InputField
              label='First Name' type="text" name='first_name' isrequired={true}
              handleChange={handleInputChange} value={inputData.first_name} />
            <InputField label='Last Name' type="text" name='last_name' isrequired={true}
              handleChange={handleInputChange} value={inputData.last_name} />
            <InputField label='Email' type="email" name='email' isrequired={true}
              handleChange={handleInputChange} value={inputData.email} />
            <InputField label='Password' type="password" name='password' isrequired={true}
              handleChange={handleInputChange} value={inputData.password} />
            <InputField label='Confirm Password' type="password" name='confirm_password' isrequired={true}
              handleChange={handleInputChange} value={inputData.confirm_password} />
            <button type='submit'>Register</button>
          </form>
        </FormStyle>
      </div>
    </section>
  )
};

export default RegisterPage;
