import "./App.css";
import { Switch, Route } from "react-router-dom";

import PageLayout from "./components/layout/layout";
import { routeConfig } from "./lib/routeConfig";
function App() {
  return (
    <PageLayout>
      <Switch>
        {routeConfig.map((route, idx) => {
          return (
            <Route key={idx} path={route.path} exact render={props => (
              <route.component {...props} />
            )}
            />
          )
        })}
      </Switch>
    </PageLayout>
  );
}

export default App;
