import React, {useState} from "react";
import ReactNative, { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import Boton from "./Boton";
import  Axios  from "axios";
import Cabecera from "./Cabecera";
import { ScrollView } from "react-native-gesture-handler";
import Textos from "./Textos";
import Separator from "./Separador";



const FormRutaNueva = (props) =>{


    const [nombreRuta, setNombreRuta]=useState("");
    const [descripcionRuta, setDescripcionRuta]=useState("");
    const [urlmapaRuta, setUrlmapaRuta]=useState("");
    const [distanciaRuta,setDistanciaRuta]=useState("");
    const [duracionrecorridoRuta,setDuracionrecorridoRuta]=useState("");
    const [actividadesRuta,setActividadesRuta]= useState("");
    const [fichatecnicaRuta,setFichatecnicaRuta]=useState("");
    const [indumentariaRuta,setIndumentariaRuta]=useState("");
    const [urlfotosRuta,setUrlfotosRuta]=useState("");
    const [dificultadRuta,setDificultadRuta]=useState("");


    const {estiloVista,estiloInput,textoCabeceraTarjeta} = estilo;


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
            <Cabecera titulo={"Nueva ruta"}/>
            <Text style={textoCabeceraTarjeta}>{"Nombre de la Ruta:"}</Text>
            <TextInput
                style={estiloInput}
                multiline
                onChangeText={text=>setNombreRuta(text)}
                value={nombreRuta}
                placeholderTextColor={"#808080"}
                placeholder={"Nombre ruta: "}/>
            <Text/>
            <Separator/>
            <Text style={textoCabeceraTarjeta}>{"Descripción:"}</Text>
            <TextInput
                style={estiloInput}
                multiline
                onChangeText={text=>setDescripcionRuta(text)}
                value={descripcionRuta}
                placeholderTextColor={"#808080"}
                placeholder="Descripcion: "/>
            <Text/>
            <Separator/>
            <Text style={textoCabeceraTarjeta}>{"Distancia:"}</Text>
            <TextInput
                style={estiloInput}
                multiline
                onChangeText={text=>setDistanciaRuta(text)}
                value={distanciaRuta}
                placeholderTextColor={"#808080"}
                placeholder="Distancia: "/>
            <Text/>
            <Separator/>
            <Text style={textoCabeceraTarjeta}>{"Duración:"}</Text>
            <TextInput
                style={estiloInput}
                multiline
                onChangeText={text=>setDuracionrecorridoRuta(text)}
                value={duracionrecorridoRuta}
                placeholderTextColor={"#808080"}
                placeholder="Duracióm: "/>
            <Text/>
            <Separator/>
            <Text style={textoCabeceraTarjeta}>{"Difultad:"}</Text>
            <TextInput
                style={estiloInput}
                multiline
                onChangeText={text=>setDificultadRuta(text)}
                value={dificultadRuta}
                placeholderTextColor={"#808080"}
                placeholder="Dificultad: "/>
            <Text/>
            <Separator/>
            <Text style={textoCabeceraTarjeta}>{"Actidades:"}</Text>
            <Textos textos={"Actidades:"}></Textos>
            <TextInput
                style={estiloInput}
                multiline
                editable
                onChangeText={text=>setActividadesRuta(text)}
                value={actividadesRuta}
                placeholderTextColor={"#808080"}
                placeholder="Actividades: "/>
            <Text/>
            <Separator/>
            <Text style={textoCabeceraTarjeta}>{"Ficha técnica:"}</Text>
            <TextInput
                style={estiloInput}
                multiline
                onChangeText={text=>setFichatecnicaRuta(text)}
                value={fichatecnicaRuta}
                placeholderTextColor={"#808080"}
                placeholder="Ficha tecnica: "/>
            <Text/>
            <Separator/>
            <Text style={textoCabeceraTarjeta}>{"Indumentaria:"}</Text>
            <TextInput
                style={estiloInput}
                multiline
                onChangeText={text=>setIndumentariaRuta(text)}
                value={indumentariaRuta}
                placeholderTextColor={"#808080"}
                placeholder="Indumentaria: "/>
            <Text/>
            <Separator/>
            <Text style={textoCabeceraTarjeta}>{"Url del mapa de la ruta:"}</Text>
            <TextInput
                style={estiloInput}
                multiline
                onChangeText={text=>setUrlmapaRuta(text)}
                value={urlmapaRuta}
                placeholderTextColor={"#808080"}
                placeholder="Mapa de la ruta: "/>
            <Text/>
            <Separator/>
            <Text style={textoCabeceraTarjeta}>{"Url del foto del ruta:"}</Text>
            <TextInput
                style={estiloInput}
                multiline
                onChangeText={text=>setUrlfotosRuta(text)}
                value={urlfotosRuta}
                placeholderTextColor={"#808080"}
                placeholder="Url fotos: "/>
            <Separator/>

            <View style={{flexDirection:"row"}}>
                <Boton tituloBoton={"Ruta nueva"} botonPresionado={()=>{

                    Axios.post(`http://192.168.100.16:9000/andariegos/insertaruta`,{    
                        nombre_ruta: nombreRuta,
                        descripcion: descripcionRuta,
                        urlmapa: urlmapaRuta,
                        distancia: distanciaRuta,
                        duracionrecorrido: duracionrecorridoRuta,
                        actividades: actividadesRuta,
                        fichatecnica: fichatecnicaRuta,
                        indumentaria: indumentariaRuta,
                        urlfotos: urlfotosRuta,
                        dificultad: dificultadRuta

                    })
                    .then((response)=> {
                        let coderr=response.data;
                        console.log(coderr);
                        if(coderr=="Ruta Registrada..."){
                            crearBotonAlerta("Registro de ruta exitosa...");

                        }
                        else{
                            crearBotonAlerta("Oppps, Error al registrar ruta...");
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
        color:"#ffffff",
        flexDirection:"row"

    },

    estiloVista: {
        backgroundColor: "#414242",
        paddingTop:1,
        paddingVertical:10,

    },
    textoCabeceraTarjeta:{
        fontSize: 18,
        fontWeight: "500",
        textTransform: "uppercase",
        color:"#ffffff",
        paddingLeft: 15,
        margin:1,
    }


});



export default FormRutaNueva;
