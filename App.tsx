import React, { useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppNavigator from './src/navigation/AppNavigator';

const App: React.FC = () => {
  useEffect(() => {
    Ionicons.loadFont();
  }, []);

  return <AppNavigator />;
};

export default App;
