import react from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation} from '@react-navigation/native'; 

export default function Inicio() {
const navigation = useNavigation();
    const agregar = () => {
        navigation.navigate("Contacto")
    }
    return (
        <View style={styles.container}>
            
            <TouchableOpacity style={styles.boton} onPress={agregar}>
                <Text style={styles.textoBoton}>Agregar contacto</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
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