import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PageLayout from "./components/layout/layout";
import LoginPage from "./pages/login/login";
import RegisterPage from "./pages/register/register";
import HomePage from "./pages/home/home";
import ProductsPage from "./pages/products/products";
function App() {
  return (
    <Router>
      <PageLayout>
        <Switch>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <Route path="/newuser">
            <RegisterPage />
          </Route>
          <Route path="/signin">
            <LoginPage />
          </Route>
          <Route path="/products">
            <ProductsPage />
          </Route>
        </Switch>
      </PageLayout>
    </Router>
  );
}

export default App;
