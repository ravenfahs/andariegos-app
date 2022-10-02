import React from "react";
import {Text,StyleSheet, View } from "react-native";

const Textos = (props) => {
    const {textos}=props;
    //console.log(props);
    const {estiloTexto, fondo} = estilos;
    return(
        <View  style={fondo}>
            <Text style = {estiloTexto}>{textos}</Text>
        </View>
    );
}

//HOJAS DE ESTILOS...
const estilos = StyleSheet.create({
    estiloTexto: {
        fontSize:15,
        borderRadius:4,
        //backgroundColor: "rgba(0,0,6, 0.4)",
        paddingt:2,
        //margin:10,
        borderWidth:2,
        borderColor: "gainsboro",
        textAlign: "center",
        color: "gainsboro",
        backgroundColor:"#333333",
        width:360,

    },
});

//EXPORTAR EL COMPONENTE...
export default Textos;
