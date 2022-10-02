import React from "react";
import ReactNative, { StyleSheet, View } from "react-native";

const Item = (props) => {
    const{estiloVista} = estilos;   
    return (
        <View  style={estiloVista}>
            {props.children}
        </View>
    );
}


const estilos = StyleSheet.create({
    estiloVista:{
             
        shadowOffset: {width:12,height:12},
        
        marginVertical:10,
        backgroundColor: "#414242",      
    }
});

export default Item;