import React, { Component, useState,useEffect } from "react";
import { View, Text, StyleSheet,ScrollView,SafeAreaView,StatusBar } from "react-native";
import  Axios from "axios";
import RutaDetalle from "./RutaDetalle";

const RutasLista =(props) =>{

  const [listaRuta, setLisRuta] = useState([]);
  useEffect(() => {
    Axios.get("http://192.168.100.16:9000/andariegos/listaruta")
      .then((response) => {
        setLisRuta(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
  }, [setLisRuta]);

  const rt = listaRuta.map((rutas)=>{
    return <RutaDetalle key={rutas.idrutas} rutas={rutas} navigation={props.navigation}/>
  })

  return (
    <View>
       <ScrollView>
           {rt}
       </ScrollView>
    </View>
  );

}

export default RutasLista;
