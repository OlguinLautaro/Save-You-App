import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from './pantallas/login';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from './firebase-config';
import Home from './navigation';
import Contacto from './pantallas/contactos';
import Registro from './pantallas/registro';
import { createStackNavigator } from '@react-navigation/stack';




const stack = createStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
            <stack.Navigator initialRouteName="Login">
                <stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <stack.Screen name="Registro" component={Registro} options={{headerShown: false}} />
                <stack.Screen name="Contacto" component={Contacto} options={{headerShown: false}} />
            </stack.Navigator>
        </NavigationContainer>
)
}


