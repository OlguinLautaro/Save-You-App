import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { app } from '../firebase-config';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

const Contacto = ({ navigation }) => {
  const [contactos, setContactos] = useState([]);
  const [Nombre, setNombre] = useState('');
  const [Telefono, setTelefono] = useState('');
  const db = getFirestore(app);

  useEffect(() => {
    getContacts(db);
  }, []);

  const agregarContacto = async () => {
    if (Nombre && Telefono) {
      var data = { Nombre, Telefono };
      const docRef = await addDoc(collection(db, "Contactos"), data);

      const updatedContacts = await getContacts(db);

      setContactos(updatedContacts);

      setNombre('');
      setTelefono('');
    }
  };

  const getContacts = async (db) => {
    const contactsCollection = collection(db, 'Contactos');
    const contactsSnapshot = await getDocs(contactsCollection);
    const contactsList = contactsSnapshot.docs.map(contact => contact.data());
    return contactsList;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Contactos</Text>

      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={Nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          keyboardType="phone-pad"
          value={Telefono}
          onChangeText={setTelefono}
        />

        <TouchableOpacity style={styles.boton} onPress={agregarContacto}>
          <Text style={styles.textoBoton}>Agregar Contacto</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={contactos}
        renderItem={({ item }) => <Text>{item.Nombre} - {item.Telefono}</Text>}
        keyExtractor={(item) => item.id}
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
    marginTop: 150,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  formulario: {
    width: '100%',
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
    backgroundColor: '#fff',
    marginLeft: 40
  },
  boton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 7,
    marginTop: 20,

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

export default Contacto;