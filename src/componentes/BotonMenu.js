import React from "react";
import { View, Text,TouchableOpacity, StyleSheet, ProgressViewIOSComponent } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//import Icon from 'react-native-vector-icons/dist/FontAwesome';

const BotonMenu = (props) =>{
    
    const  {estiloBoton,textBoton}=estilo; 
    return (
        <TouchableOpacity style={estiloBoton} onPress={props.onPress}>
           <MaterialCommunityIcons name={props.nameicono} color={"#81d742"} size={28}> </MaterialCommunityIcons>       
           <Text style={textBoton}>{props.tituloBoton}</Text>        
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    // ...
    estiloBoton: {
        //backgroundColor: "#81d742",
        borderRadius:10,
        padding: 5,
        margin:  5,
        flexDirection:"row"
        
    },
    textBoton: {
        paddingStart:8,
        fontSize:18,
        borderRadius:10,
        textAlign: "left",
        color: "#81d742",
    }
  });

export default BotonMenu;