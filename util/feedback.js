import { v5 as uuidv5 } from "uuid";

import { AlertList, Dialog } from "../component/feedback";
import { isEmptyObj } from "./util";

// Context that handles feedback related events
// Alerts, Dialogs, etc...

/*
const exampleFeedback = {
  alerts: {
    key1: {
      msg: "This is a success alert",
      severity: "success",
      params: {
        lifetimeMS: 3000 // visible for 3 seconds. the default for any alert. 0 means the alert stays visible until dismissed
      }
    },
    key2: {
      // ...
    }
  },
  dialog: {
    title: "My Dialog Title",
    content: "Some text or react component",
    actions: 'react component',
    params: {
      override: false // by default, setting a dialog over existing one does nothign, you can make it override here
    }
  }
};
*/

const defFeedback = {
  alerts: {},
  dialog: {}
};

// Where the feedback state is updated based on which actions
// are performed
const feedbackReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_ALERT": {
      const { key, ...alert } = payload;

      return { ...state, alerts: { ...state.alerts, [key]: alert } };
    }
    case "REM_ALERT": {
      const key = payload;

      const newState = Object.assign({}, state);
      delete newState.alerts[key];

      return newState;
    }
    case "SET_DIALOG": {
      // if override is false and dialog is already set
      // do nothing
      if (!params.override && isEmptyObj(state.dialog)) return state;

      return { ...state, dialog: payload };
    }
    case "REM_DIALOG": {
      const newState = Object.assign({}, state);
      newState.dialog = {};
      return newState;
    }
    default: {
      return state;
    }
  }
};

// different feedback-related actions
const feedbackActions = dispatch => ({
  // there can be multilpe alerts at once
  addAlert: (msg, severity, params = {}) => {
    // generate alert uuid
    const key = "TODO: generate id with uuiv5 here";
    dispatch({ type: "ADD_ALERT", payload: { key, msg, severity, params } });

    return key; // so user can access the alert and delete it
  },
  remAlert: key => dispatch({ type: "REM_ALERT", payload: key }),

  // there can only be one dialog at a time
  // any new dialogs will replace the old one
  setDialog: (title, content, actions, params = {}) =>
    dispatch({
      type: "SET_DIALOG",
      payload: { title, content, actions, params }
    }),
  remDialog: () => dispatch({ type: "REM_DIALOG" })
});

export const FeedbackContext = createContext();

// Any component that uses this context has access to and can edit alerts & dialogs
export const FeedbackProvider = ({ children, data = {} }) => {
  // reducer is fed a deeply merged object of `data` & `defFeeback` via `Object.assign`
  // feel free to change this merge to whatever you want
  const { feedbackState, dispatch } = useReducer(
    feedbackReducer,
    Object.assign(defFeedback, data)
  );

  const { dialog, alerts } = feedbackState;

  // this list contains all currently visible alerts.
  // it's updated whenever the context's alert change
  const alertList = Object.values(alerts);

  return (
    <FeedbackContext.Provider
      value={{ feedbackState, ...feedbackActions(dispatch) }}
    >
      <AlertList alerts={alertList} />
      <Dialog
        open={isEmptyObj(dialog)}
        title={dialog.title}
        content={dialog.content}
        actions={dialog.actions}
      />
      {children}
    </FeedbackContext.Provider>
  );
};
