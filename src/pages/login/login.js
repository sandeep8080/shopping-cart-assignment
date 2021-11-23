import FormStyle from '../../components/form/Form';
import InputField from '../../components/inputField/InputField';
import './login.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import useForm from '../../lib/useForm';

const LoginPage = () => {
  const router = useHistory();
  const userDetail = useSelector(state => state.User.userDetails);
  // console.log(userDetail);
  const onSignIn = (e) => {
    e.preventDefault();
    console.log(inputData);
    if (inputData.email === userDetail.email && inputData.password === userDetail.password) {
      console.log('User-Signed In Successfully!');
      router.push('/');
    } else {
      console.log('Invalid Credentials');
     // clearForm();
    }
  };

  // useForm custom hook to handle form events and inputs
  const { inputData, handleInputChange, clearForm } = useForm({
    email: "",
    password: "",
  });

  return (
    <section className='signIn-wrapper'>
      <article className='signIn-container'>
        <h3>Login</h3>
        <div>Get Access to your Orders, Wishlist and Recommendations</div>
      </article>
      <div className='signIn-container'>
        <FormStyle>
          <form method="POST" onSubmit={onSignIn}>
            <InputField
              label='Email'
              type="email"
              name='email'
              isrequired={true}
              handleChange={handleInputChange}
              value={inputData.email}
            />
            <InputField
              label='Password'
              type="password"
              name='password'
              isrequired={true}
              handleChange={handleInputChange}
              value={inputData.password}
            />
            <button type='submit'>SignIn</button>
          </form>
        </FormStyle>
      </div>

    </section >
  )
};

export default LoginPage;

