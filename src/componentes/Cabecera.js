import React from "react";
import {Text,StyleSheet, View } from "react-native";


const Cabecera = (props) => {
    const {titulo}=props;
    //console.log(props);
    const {estiloTexto,estiloVista} = estilos;
    return(
        <View style={estiloVista}>  
            <Text style = {estiloTexto}>{titulo}</Text>
        </View>
    );  
}

//HOJAS DE ESTILOS...
const estilos = StyleSheet.create({
    estiloTexto: {
        fontSize:20,
        padding: 10,
        textAlign: "center",
        color: "#ffffff"
        //textShadowColor: "write" 
    },
    estiloVista: {
        backgroundColor: "#333333"
    }
});


//EXPORTAR EL COMPONENTE...
export default Cabecera;