import "./App.css";
import { Switch, Route } from "react-router-dom";

import PageLayout from "./components/layout/layout";
import LoginPage from "./pages/login/login";
import RegisterPage from "./pages/register/register";
import HomePage from "./pages/home/home";
import ProductsPage from "./pages/products/products";
function App() {
  return (
    <PageLayout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/newuser" exact>
          <RegisterPage />
        </Route>
        <Route path="/signin" exact>
          <LoginPage />
        </Route>
        <Route path="/products" exact>
          <ProductsPage />
        </Route>
        <Route path='/products/:id' exact>
          <ProductsPage />
        </Route>
      </Switch>
    </PageLayout>
  );
}

export default App;
