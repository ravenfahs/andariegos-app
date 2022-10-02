import React,{Component,useContext,useState,} from "react";
import ReactNative, { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import Boton from "./Boton";
import  Axios  from "axios";
import Cabecera from "./Cabecera";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";


const FormReservar = (props) =>{

    const [nombre, setNombre]=useState();
    const [telefono, setTelefono]=useState();
    const [correo, setCorreo]=useState();
    const [numeropersonas,setNumeropersonas]=useState();
    const [fecha,setFecha]=useState();

    const {estiloVista,estiloInput} = estilo;

    const borrarDatos=()=>{
        setNombre("");
        setTelefono("");
        setCorreo("");
        setNumeropersonas("");
        setFecha("");
        setNombre_ruta("");
    }

    const crearBotonAlerta = (mensaje)=>{
        Alert.alert(
            "Resultado",
            mensaje,
            [
                {text: "Ok", onPress:()=>props.navigation.navigate(`Inicio`)}
            ]
        );
    }

    return (
        <View style={estiloVista}>
            <ScrollView>
            <Cabecera titulo={props.route.params.nombreRuta}/>
            <TextInput
                style={estiloInput}
                onChangeText={text=>setNombre(text)}
                value={nombre}
                placeholder="Nombre: "/>
            <TextInput
                style={estiloInput}
                onChangeText={text=>setTelefono(text)}
                value={telefono}
                placeholder="Telefono: "/>
            <TextInput
                style={estiloInput}
                onChangeText={text=>setCorreo(text)}
                value={correo}
                placeholder="Correo: "/>
            <TextInput
                style={estiloInput}
                onChangeText={text=>setNumeropersonas(text)}
                value={numeropersonas}
                placeholder="Numero de Personas: "/>
            <TextInput
                style={estiloInput}
                onChangeText={text=>setFecha(text)}
                value={fecha}
                placeholder="fecha: "/>
            <View style={{flexDirection:"row"}}>
                <Boton tituloBoton={"Enviar solicitud"} botonPresionado={()=>{
                    Axios.post(`http://192.168.100.16:9000/andariegos/insertareserva`,{
                        idrutas: props.route.params.idRuta,
                        nombre_ruta: props.route.params.nombreRuta,
                        fecha:fecha,
                        numeropersonas: numeropersonas,
                        nombre: nombre,
                        telefono: telefono,
                        correo: correo

                    })
                    .then((response)=> {
                        let coderr=response.data.coderr;
                        if(coderr==0){
                            crearBotonAlerta("Error en enviar solicitud...");
                            borrarDatos();
                        }
                        else{
                            crearBotonAlerta("Solicitud enviada...");
                            borrarDatos();
                        }
                    })
                    .catch((error)=>{
                        console.log(error);
                    });
                }}
                />
            </View>
            </ScrollView>
        </View>
    );
}


const estilo = StyleSheet.create({
    estiloInput:{
        borderWidth: 2,
        margin: 4,
        borderColor: "gainsboro",
        color:"#ffffff"

    },

    estiloVista: {
        backgroundColor: "#414242",
        paddingTop:1,
        paddingVertical:100,

    },


});

export default FormReservar;
