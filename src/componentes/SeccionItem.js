import React from "react";
import ReactNative, { StyleSheet, View } from "react-native";

const SeccionItem = (props) => {
   const {estiloVista} = estilos;
    return (
       <View style={estiloVista}>
           {props.children}
       </View>
   );
}

const estilos = StyleSheet.create({
    estiloVista:{
        
        borderBottomWidth: 1,
        borderColor: "gainsboro",
        padding: 5,
        flexDirection: "row",
        justifyContent: "flex-start",
        position: "relative",

    }
});

export default SeccionItem;