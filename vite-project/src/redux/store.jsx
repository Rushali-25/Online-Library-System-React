// src/redux/store.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'; // Assuming you have a reducers file

// Create a Redux store
const store = createStore(rootReducer);

// StoreProvider component to wrap the app with Redux Provider
const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
