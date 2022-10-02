import React, { useState } from "react";
import ReactNative, { View, Text,StyleSheet,Image, Linking,ImageBackground } from "react-native";
import Item from "./Item";
import SeccionItem from "./SeccionItem";
import Boton from "./Boton";
import Textos from "./Textos";
import Cabecera from "./Cabecera";
import Carusel from "./Carusel";


const RutaDetalle = (props) => {
    const {textoCabeceraTarjeta, imagenTarjeta}=estilos;
    return (

        <Item  >
        <ImageBackground source={require('../componentes/imagen/fondo.jpeg')} resizeMode="cover" style={styles}>
            <View style={{ alignSelf: 'center',paddingTop:14}} >
              <Cabecera titulo={props.rutas.nombre_ruta} />
                <Image style={imagenTarjeta} source={{uri: props.rutas.urlfotos}}/>
                    <Text style={textoCabeceraTarjeta}>{"Descripción"} </Text>
                    <Textos textos={props.rutas.descripcion}/>
                    <Text style={textoCabeceraTarjeta}>{"Distancia"}</Text>
                    <Textos textos={props.rutas.distancia}/>
                    <Text style={textoCabeceraTarjeta}>{"Duración del recorrido"}</Text>
                    <Textos textos={props.rutas.duracionrecorrido}/>
                    <Text style={textoCabeceraTarjeta}>{"dificultad"}</Text>
                    <Textos textos={props.rutas.dificultad}/>
                    <Text style={textoCabeceraTarjeta}>{"Actividades"}</Text>
                    <Textos textos={props.rutas.actividades}/>
                    <Text style={textoCabeceraTarjeta}>{"Ficha Técnica"}</Text>
                    <Textos textos={props.rutas.fichatecnica}/>
                    <Text style={textoCabeceraTarjeta}>{"Indumentaria"}</Text>
                    <Textos textos={props.rutas.indumentaria}/>

                    <Boton tituloBoton={`Ruta en Google`} botonPresionado={() =>{
                        Linking.openURL(props.rutas.urlmapa);
                    }}
                    />

                    <Boton tituloBoton={`Resevar`}  botonPresionado={() =>{
                        props.navigation.navigate("Reserva", {
                            nombreRuta: props.rutas.nombre_ruta,
                            idRuta: props.rutas.idrutas
                        });
                    }}
                   />
                    <Boton tituloBoton={`Modificar ruta`}  botonPresionado={() =>{
                        props.navigation.navigate("Modificar", {
                            nombreRuta: props.rutas.nombre_ruta,
                            idRuta: props.rutas.idrutas,
                            descripcionRuta: props.rutas.descripcion,
                            urlmapaRuta: props.rutas.urlmapa,
                            distanciaRuta: props.rutas.distancia,
                            duracionrecorridoRuta: props.rutas.duracionrecorrido,
                            actividadesRuta: props.rutas.actividades,
                            fichatecnicaRuta: props.rutas.fichatecnica,
                            indumentariaRuta: props.rutas.indumentaria,
                            urlfotosRuta: props.rutas.urlfotos,
                            dificultadRuta: props.rutas.dificultad
                        });
                    }}
                   />
            </View>

            </ImageBackground>
        </Item>

    );
}


const estilos = StyleSheet.create({
    textoCabeceraTarjeta:{
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
        color:"#ffffff",
        paddingLeft: 15,
        paddingTop:14,
        margin:2,
        padding:1
    },
    imagenTarjeta:{
        height:360,
        width:360
    }
});

const styles=StyleSheet.create({
  flex: 1,
  justifyContent: "center"
});
export default RutaDetalle;

/*
<SeccionItem>
                <Image  style={imagenTarjeta} source={{uri: props.rutas.urlfotos}}/>
                <Image  style={imagenTarjeta} source={{uri: 'https://www.zentica-global.com/2020/02/react-native-150x150-1.jpg'}}  />
            </SeccionItem>

             <Image  style={imagenTarjeta} source={{uri: props.rutas.urlfotos}}/>


navigation.navigate('Root', {
  screen: 'Profile',
  params: { user: 'jane' },
});


*/
