import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import alertsReducer from "../reducers/alerts";

export default () => {
  const persistConfig = {
    key: "root",
    storage
  };

  let reducers = combineReducers({
    alerts: alertsReducer
  });

  let store = createStore(
    persistReducer(persistConfig, reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  let persistor = persistStore(store);

  return { store, persistor };
};
