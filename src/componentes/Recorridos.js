import React from "react";
import { AppRegistry, View, Text, Image, ScrollView, StyleSheet,StatusBar,ImageBackground} from "react-native";
import Cabecera from "./Cabecera";
import Textos from "./Textos";
import YoutubePlayer from 'react-native-youtube-iframe';

const Recorridos = () =>{
    return (
        <View style={styles.container} >
          <Cabecera titulo={"ANDARIEGOS"}/>
            <ScrollView >
              <ImageBackground source={require('../componentes/imagen/fondo.jpeg')} resizeMode="cover" style={styles.image}>
                <View style={{ alignSelf: 'center',paddingTop:14}}>
                  <Image  source={require('../componentes/imagen/img_1.jpg')}
                    style={{width: 360, height: 360}}/>
                      <View style={{paddingTop:14}}>
                        <Textos textos={"La Asociación Azufral los Andariegos del municipio de Túquerres - Nariño - Colombia lo invitamos a recoger nuestro portal, esperamos que encuentre toda la información acerca de nuestras actividades."}></Textos>
                      </View>
                      <View style={{paddingTop:14}} >
                        <YoutubePlayer height={360} width={360} videoId={"EerUffn2jfE"} play={"false"} volume={50} playbackRate={1} />
                      </View>
                      <View style={{paddingTop:14}} >
                        <Textos textos={"Dirección: Vereda San Roque,Túquerres – Nariño, Colombia. Horas Lunes a Viernes – 8 a 12 a.m. y 2 a 6 p.m. Teléfonos: 3176372294. 3152213109. Correo electrónico: contacto@andariegos.com.co asociacion@andariegos.com.co"}>
                        </Textos>
                      </View>
                      </View>
                  </ImageBackground>
            </ScrollView>
        </View>
    );
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

export default Recorridos;
