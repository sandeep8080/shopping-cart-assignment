import React from "react";
import Form from '../../components/form/Form';
import InputField from '../../components/inputField/InputField';
import Button from '../../components/button/Button';

import './register.css';

const RegisterPage = () => {
  return (
    <section className='register-wrapper'>
      <article className='register-container'>
        <h3>SignUp</h3>
        <div>We do not share your personal details</div>
      </article>
      <div className='register-container'>
        <Form>
          <InputField label='First Name' type="text" name='first_name' isrequired={true} />
          <InputField label='Last Name' type="text" name='last_name' isrequired={true} />
          <InputField label='Email' type="email" name='email' isrequired={true} />
          <InputField label='Password' type="password" name='password' isrequired={true} />
          <InputField label='Confirm Password' type="password" name='confirm_password' isrequired={true} />
          <Button btnText='Register' handleSubmit={() => console.log("Register the user")} />
        </Form>
      </div>

    </section>
  )
};

export default RegisterPage;
