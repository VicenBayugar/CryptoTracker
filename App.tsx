import React from 'react';
import StackNavigation from './src/navigation/StackNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StackNavigation />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
