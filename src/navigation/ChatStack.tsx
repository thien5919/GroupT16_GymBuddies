import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListChat from '../Screens/ListChatScreen';
import RoomChat from '../Screens/RoomChatScreen';


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ListChat" component={ListChat} options={{ headerShown: false }} />
        <Stack.Screen name="RoomChat" 
            component={RoomChat}
        />
    </Stack.Navigator>
  );
};

export default StackNavigator;
