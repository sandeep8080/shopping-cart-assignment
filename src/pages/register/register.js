import React, { useState } from "react";
import Form from '../../components/form/Form';
import InputField from '../../components/inputField/InputField';
import Button from '../../components/button/Button';

import './register.css';
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/action/user";

const RegisterPage = () => {
  const router = useHistory();
  const dispatch = useDispatch();
  const [registerUser, setRegisterUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    const pName = evt.target.name;
    setRegisterUser((prevState) => {
      return {
        ...prevState,
        [pName]: value
      }
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (registerUser.password === registerUser.confirm_password) {
      //console.log(registerUser);
      console.log('User is Registered Now');
      dispatch(addUser(registerUser));
      setRegisterUser({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
      });
      router.push('/signin');
    } else {
      console.log('Password Mismatch !!...');
      setRegisterUser({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
      })
    }

  };

  return (
    <section className='register-wrapper'>
      <article className='register-container'>
        <h3>SignUp</h3>
        <div>We do not share your personal details</div>
      </article>
      <div className='register-container'>
        <Form>
          <InputField label='First Name' type="text" name='first_name' isrequired={true} handleChange={handleChange} value={registerUser.first_name} />
          <InputField label='Last Name' type="text" name='last_name' isrequired={true} handleChange={handleChange} value={registerUser.last_name} />
          <InputField label='Email' type="email" name='email' isrequired={true} handleChange={handleChange} value={registerUser.email} />
          <InputField label='Password' type="password" name='password' isrequired={true} handleChange={handleChange} value={registerUser.password} />
          <InputField label='Confirm Password' type="password" name='confirm_password' isrequired={true} handleChange={handleChange} value={registerUser.confirm_password} />
          <Button btnText='Register' handleClick={handleOnSubmit} />
        </Form>
      </div>
    </section>
  )
};

export default RegisterPage;
