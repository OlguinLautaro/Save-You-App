import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function Contacto(){
    const [contactos, setContactos] = useState([]);
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
  
    const agregarContacto = () => {
      if (nombre && telefono) {
        setContactos([...contactos, { id: Date.now().toString(), nombre, telefono }]);
        setNombre('');
        setTelefono('');
      }
    };
    return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Lista de Contactos</Text>
    
          <View style={styles.formulario}>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={nombre}
              onChangeText={setNombre}
            />
   <TextInput
          style={styles.input}
          placeholder="Teléfono"
          keyboardType="phone-pad"
          value={telefono}
          onChangeText={setTelefono}
        />

        <TouchableOpacity style={styles.boton} onPress={agregarContacto}>
          <Text style={styles.textoBoton}>Agregar Contacto</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={contactos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nombre}</Text>
            <Text>{item.telefono}</Text>
          </View>
        )}
      />
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
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    formulario: {
      width: '100%',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 15,
      paddingLeft: 10,
    },
    boton: {
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    textoBoton: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    item: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      width: '100%',
    },
});
  