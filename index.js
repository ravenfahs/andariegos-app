
import React from "react";
import 'react-native-gesture-handler';
import { AppRegistry, View, Text, Image, ScrollView, StyleSheet,StatusBar} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Inicio from "./src/componentes/Inicio";
import RutasLista from "./src/componentes/RutasLista"
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import BotonMenu from "./src/componentes/BotonMenu";
import FormReservar from "./src/componentes/FormReservar";
import FormUsario from "./src/componentes/FormUsuario";
import FormRuta from "./src/componentes/FormRuta";
import FormRutaNueva from "./src/componentes/FormRutaNueva";
import Menu2 from "./src/componentes/Menu2";

const Drawer = createDrawerNavigator();


//componente funcional...no es una prueba.. esto ya no es una prueba
const App = () => {

    return (
      <NavigationContainer independent={true}>
            <Drawer.Navigator drawerContent={(props)=><MenuItems {...props}/>    }>
                <Drawer.Screen  name="Inicio" component={Inicio}></Drawer.Screen>
                <Drawer.Screen  name="Recorridos guiados" component={RutasLista}></Drawer.Screen>
                <Drawer.Screen  name="Reserva" component={FormReservar} ></Drawer.Screen>
                <Drawer.Screen  name="Registrarse" component={FormUsario} ></Drawer.Screen>
                <Drawer.Screen  name="Modificar" component={FormRuta} ></Drawer.Screen>
                <Drawer.Screen  name="Agregar ruta" component={FormRutaNueva} ></Drawer.Screen>
             </Drawer.Navigator>
      </NavigationContainer>
    );
}

const MenuItems = ({navigation}) => {
  const  {contenedor,titulo}=styles;

  return (
    <DrawerContentScrollView style={contenedor}>
      <Image source={require('../andariegos/src/componentes/imagen/logo.png')}
          style={{width: 260, height: 260}}/>
      <Text style={titulo}>ANDARIEGOS</Text>
      <Separator />
      <BotonMenu tituloBoton="Inicio" nameicono="home"
          onPress ={()=> navigation.navigate('Inicio')}/>
      <Separator />
      <BotonMenu tituloBoton="Registrarse" nameicono="account-edit"
          onPress ={()=> navigation.navigate("Registrarse")}/>
      <Separator />
      <BotonMenu tituloBoton="Ingresar" nameicono="account"/>
      <Separator />
      <BotonMenu tituloBoton="Recorridos guiados" nameicono="routes"
          onPress ={()=> navigation.navigate("Recorridos guiados")}/>
      <Separator />
      <BotonMenu tituloBoton={"Agregar ruta"} nameicono="router"
          onPress ={()=> navigation.navigate("Agregar ruta")}/>
    </DrawerContentScrollView>
  );
}

const Separator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
    contenedor:{
      padding:10,
      backgroundColor:"#333333"
    },
    titulo:{
      fontSize: 20,
      fontWeight: "bold",
      color:"#ffffff",
      textAlign:"center",
      padding:10
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#fffffa',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

//RENDERIZAR EL COMPONENTE EN PANTALLA
AppRegistry.registerComponent("andariegos", () => App);
