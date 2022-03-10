import "./App.css";
import { Switch, Route } from "react-router-dom";

import PageLayout from "./components/layout/layout";
import { routeConfig } from "./lib/routeConfig";
import { Suspense } from "react";
function App() {
  return (
    <PageLayout>
      <Suspense fallback={<p>Loading ....</p>}>
        <Switch >
          {routeConfig.map((route, idx) => {
            return (
              <Route key={idx} path={route.path} exact render={props => (
                <route.component {...props} />
              )}
              />
            )
          })}
        </Switch>
      </Suspense>
    </PageLayout>
  );
}

export default App;
