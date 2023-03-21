import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/_store';

import TabNavScreen from "./src/screen/navigation/NavScreen"; 


export default function App() {
  return (
    <Provider store={store}>
      <TabNavScreen></TabNavScreen>
    </Provider>
  );
}