import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { history, store } from "./redux/store";

const App = lazy(() => import("./pages/app"));

const Router: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div />}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" component={App} />
              <Route component={() => <h1>404</h1>} />
            </Switch>
          </ConnectedRouter>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
