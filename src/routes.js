import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/main';
import Login from './pages/login';
import Caracter from './pages/caracter';
import CreateAccount from './pages/createAccount';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{
          title: 'Login',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#28FA7D',
          },
          headerTitleStyle: {
            color: 'black',
            fontWeight: 'bold',
          }
        }} />
        <Stack.Screen name="createAccount" component={CreateAccount} options={{
          title: 'Criar Usuário',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#28FA7D',
          },
          headerTitleStyle: {
            color: 'black',
            fontWeight: 'bold',
          }
        }} />
        <Stack.Screen name='main' component={Main} options={{
          title: 'RickVerso',
          headerLeft: null,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#28FA7D',
          },
          headerTitleStyle: {
            color: 'black',
            fontWeight: 'bold',
          }
        }}/>
        <Stack.Screen name='caracter' component={Caracter} options={{
          title: 'Se Deus existe, eu sou Ele!',
          headerTitleAlign: 'center',
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: '#28FA7D',
          },
          headerTitleStyle: {
            color: 'black',
            fontWeight: 'bold',
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}