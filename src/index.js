import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//Import style
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Import redux utils
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./redux/reducers";
import { applyMiddleware, compose, createStore } from "redux";

const middleware = [thunk];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// Apply a middleware for asynchronous calls and create the general storage of the application
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();