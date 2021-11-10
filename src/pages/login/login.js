import React from 'react';
import Form from '../../components/form/Form';
import InputField from '../../components/inputField/InputField';
import Button from '../../components/button/Button';
import './login.css';

const LoginPage = () => {
  return (
    <section className='signIn-wrapper'>
      <article className='signIn-container'>
        <h3>Login</h3>
        <div>Get Access to your Orders, Wishlist and Recommendations</div>
      </article>
      <div className='signIn-container'>
        <Form>
          <InputField label='Email' type="email" name='email' isrequired={true} />
          <InputField label='Password' type="password" name='password' isrequired={true} />
          <Button btnText='SignIn' />
        </Form>
      </div>

    </section>
  )
};

export default LoginPage;

