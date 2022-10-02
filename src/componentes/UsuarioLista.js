import React, { Component, useState,useEffect } from "react";
import { View, Text, StyleSheet,ScrollView,SafeAreaView,StatusBar } from "react-native";
import  Axios from "axios";
import UsuarioDetalle from "./UsuarioDetalle";

const UsuarioLista =(props) =>{

  const [listaUsuario, setLisUsuario] = useState([]);
  useEffect(() => {
    Axios.get("http://192.168.100.16:9000/andariegos/listausuario")
      .then((response) => {
        setLisUsuario(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setLisUsuario]);

  const ut = listaUsuario.map((usuarios)=>{
    return <UsuarioDetalle key={usuarios.idusuario} usuarios={usuarios} navigation={props.navigation}/>
  })

  return (
    <View>
       <ScrollView>
          {ut}
       </ScrollView>
    </View>
  );

}

export default UsuarioLista;
