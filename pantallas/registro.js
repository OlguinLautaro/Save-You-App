import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from './../firebase-config';
import Login from './login';
import { useNavigation} from '@react-navigation/native';

export default function Registro(){
  const [nombre, setNombre] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigation = useNavigation();

  const heandleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
      console.log('Cuenta creada!')
      const user = userCredential.user;
      navigation.navigate("Login");
      //console,log(user)
    })
    .catch(error =>{
      console.log(error)
      Alert.alert(error.message)
    })
    if (nombre.trim() === '' || email.trim() === '' || password.trim() === ''){
      setIsModalVisible(true);
      Alert.alert('Datos no detectados', 'Por favor ingrese sus datos para poder crear su cuenta')
    } else {
      console.log('Nombre:', nombre);
      console.log('Email:', email);
      console.log('Contraseña', password);
    }
  }

   /*const handleRegistro = () => {
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Contraseña:', contrasena);
  };*/

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("./../assets/logo.png")}
      />
      <Text style={styles.titulo}>Registro</Text>

      
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
            <TouchableOpacity style={styles.boton} onPress={heandleCreateAccount}>
        <Text style={styles.textoBoton}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    paddingStart: 30,
    padding: 10,
    width: '80%',
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff'
  },
 
  boton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 7,
    marginTop: 20
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});