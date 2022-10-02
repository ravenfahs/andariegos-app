import React, { useState } from "react";
import ReactNative, { View, Text,StyleSheet,Image, Linking } from "react-native";
import Item from "./Item";
import SeccionItem from "./SeccionItem";
import Boton from "./Boton";
import Textos from "./Textos";
import Cabecera from "./Cabecera";
import Carusel from "./Carusel";


const UsuarioDetalle = (props) => {
    const {textoCabeceraTarjeta, imagenTarjeta}=estilos;    
    return (
               
        <Item>
            <View>
            <Cabecera titulo={props.usuarios.nombre}/>
            </View>
            <SeccionItem>
                <View>
                    <Text style={textoCabeceraTarjeta}>{"Nombre"} </Text>
                    <Textos textos={props.usuarios.telefono}/>
                </View>
            </SeccionItem>
            <SeccionItem>
                <View>
                    <Text style={textoCabeceraTarjeta}>{"Correo"}</Text>
                    <Textos textos={props.usuarios.correo}/>
                </View>
            </SeccionItem>
            <SeccionItem>
                <View>
                    <Text style={textoCabeceraTarjeta}>{"Password"}</Text>
                    <Textos textos={props.usuarios.password}/>
                </View>
            </SeccionItem>
        </Item>
    );
}


const estilos = StyleSheet.create({
    textoCabeceraTarjeta:{
        fontSize: 18,
        fontWeight: "500",
        textTransform: "uppercase",
        color:"#ffffff",
        paddingLeft: 15,
        margin:1,
    },
    imagenTarjeta:{
        height:300,
        flex:1,
        width:0
    }
});

export default UsuarioDetalle;

/*<Boton tituloBoton={`Resevar ${props.usuario.nombre_ruta}`}  botonPresionado={() =>{
                    props.navigation.navigate("Reserva", {         
                        nombreRuta: props.usuario.nombre_ruta,
                        idRuta: props.usuario.idusuario
                    });
                }}
               />*/