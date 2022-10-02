import React from "react";
import { View, Text,TouchableOpacity, StyleSheet, ProgressViewIOSComponent } from "react-native";


const Boton = (props) =>{
    const  {estiloBoton,textBoton}=estilo;
    return (
        <TouchableOpacity style={estiloBoton} onPress={props.botonPresionado}>
            <Text style={textBoton}>{props.tituloBoton}</Text>
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    // ...
    estiloBoton: {
        
        backgroundColor: "#81d742",
        borderRadius:10,
        padding: 10,
        margin:  14,


    },
    textBoton: {
        fontSize:18,
        borderRadius:10,
        textAlign: "center",
        fontWeight: "bold",
        color: "#ffffff",
        textTransform: "uppercase"
    }
  });

export default Boton;
