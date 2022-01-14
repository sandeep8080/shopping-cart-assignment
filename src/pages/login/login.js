import FormStyle from '../../components/form/Form';
import InputField from '../../components/inputField/InputField';
import './login.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import useForm from '../../lib/useForm';
import { FastField, Formik } from 'formik';
import * as Yup from 'yup';

/**
 * * Using Fromik for From handling
 * * Yup for validation
 * ! No need to create your own custom hookm to handle form
 * 
 */

/**
 * ! ============ Formik & Yup ==================
 * ? Touched - indicated whether the user has visited the field or not
 * ? string.email - inbuilt validation for email in yup
 * 
 */
const LoginPage = () => {
  const validateSchema = Yup.object({
    email: Yup.string()
      .max(30, 'Email is too long!')
      .email('Invalid Email address!')
      .required('*Required'),
    password: Yup.string()
      .min(8, 'Too short!')
      .max(16, 'Too long!')
      .required('*Required')
  })
  const router = useHistory();
  const userDetail = useSelector(state => state.User.userDetails);

  return (
    <section className='signIn-wrapper'>
      <article className='signIn-container'>
        <h3>Login</h3>
        <div>Get Access to your Orders, Wishlist and Recommendations</div>
      </article>
      <div className='signIn-container'>
        <FormStyle>
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={validateSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              if (values.email === userDetail.email && values.password === userDetail.password) {
                console.log('User-Signed In Successfully!');
                router.push('/');
              } else {
                console.log('Invalid Credentials');
              }
              setSubmitting(false);
            }}
          >
            {({ values, handleBlur, handleChange, handleSubmit, errors, touched, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <InputField
                  label='Email'
                  type="email"
                  name='email'
                  isrequired={true}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.email}
                  errors={errors}
                  touched={touched}
                />
                <InputField
                  label='Password'
                  type="password"
                  name='password'
                  isrequired={true}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.password}
                  errors={errors}
                  touched={touched}
                />
                <button type='submit' disabled={isSubmitting}>SignIn</button>
              </form>
            )}
          </Formik>
        </FormStyle>
      </div>
    </section >
  )
};

export default LoginPage;

