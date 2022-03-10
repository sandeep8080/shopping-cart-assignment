import React from 'react';
// import HomePage from "../pages/home/home";
// import LoginPage from "../pages/login/login";
// import RegisterPage from "../pages/register/register";
// import ProductsPage from "../pages/products/products";
const HomePage = React.lazy(() => import("../pages/home/home"));
const LoginPage = React.lazy(() => import("../pages/login/login"));
const RegisterPage = React.lazy(() => import("../pages/register/register"));
const ProductsPage = React.lazy(() => import("../pages/products/products"));
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