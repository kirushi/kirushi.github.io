import React from "react";
import { Router as ReactRouter, Route, IndexRoute, browserHistory } from "react-router";

import App from "./components/app";
import Home from "./components/home";
import Blog from "./components/blog";

const Router = () => (
  <ReactRouter history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="blog" component={Blog} />
    </Route>
  </ReactRouter>
);

export default Router;
