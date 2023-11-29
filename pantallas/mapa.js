import * as react from 'react';
import * as location from 'expo-location';
import { View, Text, StyleSheet } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {GOOGLE_API_KEY} from '@env';

export default function Mapa() {
    const [origin, setOrigin] = react.useState({ //ubicacion predeterminada de inicio
        latitude: -38.951890,
        longitude: -68.059173,
    }) 

    const [destination, setDestination]= react.useState({ //ubicacion predeterminada de llegada
        latitude: -38.956585,
        longitude: -68.058960,
    })

    return (
        <View style={styles.container //contenedor de todo el mapa 
    }> 
            
            <MapView style={styles.map} //mapa
            initialRegion={{
                latitude: origin.latitude,
                longitude: origin.longitude,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
            }}
            >
                <Marker //marcador de inicio
                draggable={true}
                coordinate={origin}
                onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate) }
                />
                <Marker //marcador de llegada
                draggable={true}
                coordinate={destination}
                onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
                />
                <MapViewDirections //ruta para ir de una direccion a otra
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_API_KEY}
                    strokeColor='blue'
                    strokeWidth={6} 
                />

            </MapView>
        </View>

            )
    }

    const styles = StyleSheet.create({ //estilos de contenedor y mapa
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    
        map: {
            width: '100%',
            height: '100%'
        }
    
    
    
    });


