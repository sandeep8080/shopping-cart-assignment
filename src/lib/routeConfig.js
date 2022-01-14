import HomePage from "../pages/home/home";
import LoginPage from "../pages/login/login";
import RegisterPage from "../pages/register/register";
import ProductsPage from "../pages/products/products";

export const routeConfig = [{
  description: 'Home Page',
  path: '/',
  exact: true,
  component: () => <HomePage />
},
{
  description: 'Sign In Page',
  path: '/signin',
  exact: true,
  component: () => <LoginPage />
}, {
  description: 'New User Register Page',
  path: '/newuser',
  exact: true,
  component: () => <RegisterPage />
}, {
  description: 'Products Home Page',
  path: '/products',
  exact: true,
  component: () => <ProductsPage />
}, {
  description: 'Product Page',
  path: '/products/:id',
  exact: true,
  component: () => <ProductsPage />
}
];