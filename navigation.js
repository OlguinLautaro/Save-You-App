import React from "react";
import boton from "./pantallas/boton";
import inicio from "./pantallas/inicio";
import mapa from "./pantallas/mapa";
import { View, Text, } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();//variable para los iconos

function TabGroup() { 
    return (
    <Tab.Navigator
        screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({color, focused, size}) => {
            let iconName;
            if (route.name === "inicio") {
            iconName = focused ? "home" : "home-outline";//icono para el inicio
            } else if (route.name === "mapa") {
            iconName = focused ? "map" : "map-outline";//icono para el mapa
            } else if (route.name === "boton") {
            iconName = focused ? "circle" : "circle-o";//icono para el boton
            }
            return <Ionicons name={iconName} color={color} size={size} />
        },
        })}
        >
        <Tab.Screen name="inicio" component={inicio} /> 
        <Tab.Screen name="boton" component={boton} />
        <Tab.Screen name="mapa" component={mapa} />
        
        </Tab.Navigator> //Iconos de inicio, boton y mapa
    )
    }

    export default function Navigation() {
    
        return (
            <NavigationContainer>
    
                <TabGroup />
    
            </NavigationContainer>
        
        )
    }