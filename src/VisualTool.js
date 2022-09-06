import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {initAuth, SET_DATASET, SET_EMAIL, SET_SERVER_INFO} from './actions';
import rootReducer from './reducers';
import AppWrapper from './AppWrapper';
// import * as serviceWorker from './serviceWorker';
import mixpanel from 'mixpanel-browser';

let useMixPanel = false;

const logger = (store) => (next) => (action) => {
  if (action.type === SET_SERVER_INFO) {
    if (action.payload.mixpanel) {
      mixpanel.init(action.payload.mixpanel);
      useMixPanel = true;
    }
  }
  if (useMixPanel) {
    if (action.type === SET_DATASET) {
      mixpanel.track('Open Dataset', {
        name: action.payload.name,
        id: action.payload.id,
      });
    } else if (action.type === SET_EMAIL) {
      mixpanel.identify(action.payload);
    }
  }
  return next(action);
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

store.dispatch(initAuth());

export function VisualTool() {
  return(
    <Provider store={store}>
      {/*<React.StrictMode>*/}
        <div id={"VisualTool"}
             style={{
                 borderRadius: 5,
                 borderStyle: "solid",
                 borderWidth: 1,
                 borderColor: "lightgray",
                 width: "100%",
                 height: "800px",
                 overflow: "scroll",
                 transform:"translate3d(0, 0, 0)"
        }}>
          <AppWrapper/>
        </div>
      {/*</React.StrictMode>*/}
    </Provider>
    );
}