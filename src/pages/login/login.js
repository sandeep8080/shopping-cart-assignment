import React, { useState } from 'react';
import Form from '../../components/form/Form';
import InputField from '../../components/inputField/InputField';
import Button from '../../components/button/Button';
import './login.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

const LoginPage = () => {
  const [signInDetails, setSignInDetails] = useState({
    email: '',
    password: ''
  });
  const router = useHistory();
  const userDetail = useSelector(state => state.User.userDetails);
  //console.log(userDetail);
  const onSignIn = (e) => {
    e.preventDefault();
    if (signInDetails.email === userDetail.email && signInDetails.password === userDetail.password) {
      console.log('User-Signed In Successfully!');
      router.push('/');
    } else {
      console.log('Invalid Credentials');
      setSignInDetails({
        email: '',
        password: ''
      });
    }
  };

  const handleSignIn = (e) => {
    setSignInDetails(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    });
  };

  return (
    <section className='signIn-wrapper'>
      <article className='signIn-container'>
        <h3>Login</h3>
        <div>Get Access to your Orders, Wishlist and Recommendations</div>
      </article>
      <div className='signIn-container'>
        <Form>
          <InputField
            label='Email'
            type="email"
            name='email'
            isrequired={true}
            handleChange={handleSignIn}
            value={signInDetails.email}
          />
          <InputField
            label='Password'
            type="password"
            name='password'
            isrequired={true}
            handleChange={handleSignIn}
            value={signInDetails.password}
          />
          <Button btnText='SignIn' handleClick={onSignIn} />
        </Form>
      </div>

    </section>
  )
};

export default LoginPage;

