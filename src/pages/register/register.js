import FormStyle from '../../components/form/Form';
import InputField from '../../components/inputField/InputField';
import './register.css';
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/action/user";
// import useForm from "../../lib/useForm";
import { Formik } from 'formik';
import * as Yup from 'yup';

const RegisterPage = () => {
  const router = useHistory();
  const dispatch = useDispatch();

  const newUserValidationSchema = Yup.object({
    firstName: Yup.string()
      .max(20, 'Too Long Name!')
      .min(3, 'Too Short Name!')
      .required('*Required'),
    lastName: Yup.string()
      .max(14, 'Too Long Name!')
      .min(4, 'Too Short Name!')
      .required('*Required'),
    email: Yup.string()
      .max(30, 'Email is too long!')
      .email('Invalid Email address!')
      .required('*Required'),
    password: Yup.string()
      .min(8, 'Too short!')
      .max(16, 'Too long!')
      .required('*Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password do not match!')
  });

  return (
    <section className='register-wrapper'>
      <article className='register-container'>
        <h3>SignUp</h3>
        <div>We do not share your personal details</div>
      </article>
      <div className='register-container'>
        <FormStyle>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: ''
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              dispatch(addUser(values));
              router.push('/signin');
            }}
            validationSchema={newUserValidationSchema}
          >
            {({ values, handleChange, handleBlur, handleSubmit, errors, touched, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <InputField
                  label='First Name'
                  type="text"
                  name='firstName'
                  isrequired={true}
                  value={values.firstName}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched}
                  errors={errors}
                />
                <InputField
                  label='Last Name'
                  type="text"
                  name='lastName'
                  isrequired={true}
                  value={values.lastName}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched}
                  errors={errors}
                />
                <InputField
                  label='Email'
                  type="email "
                  name='email'
                  isrequired={true}
                  value={values.email}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched}
                  errors={errors}
                />
                <InputField
                  label='Password'
                  type="password"
                  name='password'
                  isrequired={true}
                  value={values.password}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched}
                  errors={errors}
                />
                <InputField
                  label='Confirm Password'
                  type="password"
                  name='confirmPassword'
                  isrequired={true}
                  value={values.confirmPassword}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched}
                  errors={errors}
                />
                <button type='submit' disabled={isSubmitting}>Register</button>
              </form>
            )}
          </Formik>
        </FormStyle>
      </div>
    </section>
  )
};

export default RegisterPage;
