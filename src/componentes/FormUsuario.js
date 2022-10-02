import React, {useState} from "react";
import ReactNative, {Text, StyleSheet, View,ScrollView,TextInput,Alert,ImageBackground} from "react-native";
import Cabecera from "./Cabecera";
import Boton from "./Boton";
import  Axios  from "axios";
import Textos from "./Textos";

const FormUsario = (props) =>{


    const {estiloVista,estiloInput} = estilo;
    const [nombre, setNombre]=useState();
    const [telefono, setTelefono]=useState();
    const [correo, setCorreo]=useState();
    const [password, setPassword]=useState();

    const borrarDatos=()=>{
        setNombre("");
        setTelefono("");
        setCorreo("");
        setPassword("");
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

        <View >
          <Cabecera titulo={"Registro de usuarios"}/>
            <ScrollView >
                <ImageBackground source={require('../componentes/imagen/fondo.jpeg')} resizeMode="cover" style={styles}>
                <Text style={texto}> {"Nombre:"}</Text>
                  <TextInput
                      style={estilo}
                      onChangeText={text=>setNombre(text)}
                      value={nombre}
                      placeholderTextColor={"#808080"}
                      placeholder="Nombre: "/>
                  <Text style={texto}> {"Telefono:"}</Text>
                  <TextInput
                      style={estilo}
                      onChangeText={text=>setTelefono(text)}
                      value={telefono}
                      placeholderTextColor={"#808080"}
                      placeholder="Telefono: "/>
                  <Text style={texto}> {"Correo:"}</Text>
                  <TextInput
                      style={estilo}
                      onChangeText={text=>setCorreo(text)}
                      value={correo}
                      placeholderTextColor={"#808080"}
                      placeholder="Correo: "/>
                  <Text  style={texto}> {"Password:"}</Text>
                  <TextInput
                      style={estilo}
                      secureTextEntry
                      onChangeText={text=>setPassword(text)}
                      value={password}
                      placeholderTextColor={"#808080"}
                      placeholder="Password: "/>
                      <Boton tituloBoton={"Registarse"} botonPresionado={()=>{
                          Axios.post(`http://192.168.100.16:9000/andariegos/insertarusuario`,{
                              nombre: nombre,
                              telefono: telefono,
                              correo: correo,
                              password: password
                          })
                          .then((response)=> {
                              let coderr=response.data;
                              if(coderr=="Usuario registrado..."){
                                  crearBotonAlerta("Registro exitoso...");
                                  borrarDatos();
                              }
                              else{
                                  crearBotonAlerta("Hooops. Error el correo ya esxiste....");
                                  borrarDatos();
                              }
                          })
                          .catch((error)=>{
                              console.log(error);
                          });
                      }}
                      />
              </ImageBackground>
           </ScrollView>
        </View>
    );
}

const estilo = StyleSheet.create({
        paddingLeft:14,
        margin: 1,
        paddingTop:14,
        borderWidth: 2,
        margin: 13,
        borderColor: "gainsboro",
        color:"#ffffff",
        fontSize: 18,
        width:360,
        alignSelf: "center"
  });

const texto = StyleSheet.create({
    fontWeight: "bold",
    color:"#ffffff",
    paddingLeft:6,
    fontSize: 18,
    paddingTop:14
});


const styles=StyleSheet.create({
  flex: 3,
  justifyContent: "center"
});

export default FormUsario;
