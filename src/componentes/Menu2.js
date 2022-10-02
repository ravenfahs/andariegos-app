import React from "react";
import 'react-native-gesture-handler';
import { AppRegistry, View, Text, Image, ScrollView, StyleSheet,StatusBar} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Inicio from "./Inicio";
import RutasLista from "./RutasLista"
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import BotonMenu from "./BotonMenu";
import Textos from "./Textos";
import Recorridos from "./Recorridos"

const Drawer = createDrawerNavigator();


//componente funcional...no es una prueba.. esto ya no es una prueba
const Menu2 = () => {

    return (
      <NavigationContainer independent={true} >
            <Drawer.Navigator drawerContent={(props)=><MenuItems {...props}/>    }>
                <Drawer.Screen  name="Recorrido la Chorrera" component={Rchorrera} options ={{headerShown: false}}></Drawer.Screen>
                <Drawer.Screen  name="Recorrido San Roque" component={Rroque}></Drawer.Screen>
                <Drawer.Screen  name="Recorrido Azufral" component={Razufral} ></Drawer.Screen>
             </Drawer.Navigator>
      </NavigationContainer>
    );
}

const MenuItems = ({navigation}) => {
  const  {contenedor,titulo}=styles;

  return (
    <DrawerContentScrollView style={contenedor}>
      <Image source={require('../componentes/imagen/logo.png')}
              style={{width: 260, height: 260}}/>
      <Text style={titulo}>ANDARIEGOS</Text>
      <Separator />

      <BotonMenu tituloBoton="Recorrido la Chorrera" nameicono="home"
          onPress ={()=> navigation.navigate('Recorrido la Chorrera')}/>
      <Separator />
      <BotonMenu tituloBoton="Recorrido San Roque" nameicono="account-edit"
          onPress ={()=> navigation.navigate("Recorrido San Roque")}/>
      <Separator />
      <BotonMenu tituloBoton="Recorrido Azufral" nameicono="account"
          onPress={()=> navigation.navigate("Recorrido Azufral")}/>

      <Separator />

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

export default Menu2;
