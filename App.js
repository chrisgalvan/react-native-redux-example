import React from 'react';
import { Provider } from 'react-redux';
import MainPage from './src/MainPage/MainPage';
import { store, persistor } from './src/redux/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  }
}