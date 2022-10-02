import React, {useState} from "react";
import ReactNative, { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import Boton from "./Boton";
import  Axios  from "axios";
import Cabecera from "./Cabecera";
import { ScrollView } from "react-native-gesture-handler";
import Textos from "./Textos";
import Separator from "./Separador";



const FormRuta = (props) =>{


    const [nombreRuta, setNombreRuta]=useState(props.route.params.nombreRuta);
    const [descripcionRuta, setDescripcionRuta]=useState(props.route.params.descripcionRuta);
    const [urlmapaRuta, setUrlmapaRuta]=useState(props.route.params.urlmapaRuta);
    const [distanciaRuta,setDistanciaRuta]=useState(props.route.params.distanciaRuta);
    const [duracionrecorridoRuta,setDuracionrecorridoRuta]=useState(props.route.params.duracionrecorridoRuta);
    const [actividadesRuta,setActividadesRuta]= useState(props.route.params.actividadesRuta);
    const [fichatecnicaRuta,setFichatecnicaRuta]=useState(props.route.params.fichatecnicaRuta);
    const [indumentariaRuta,setIndumentariaRuta]=useState(props.route.params.indumentariaRuta);
    const [urlfotosRuta,setUrlfotosRuta]=useState(props.route.params.urlfotosRuta);
    const [dificultadRuta,setDificultadRuta]=useState(props.route.params.dificultadRuta);


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
            <Cabecera titulo={props.route.params.nombreRuta}/>
            <Text style={textoCabeceraTarjeta}>{"Nombre de la Ruta:"}</Text>
            <TextInput
                style={estiloInput}
                multiline
                onChangeText={text=>setNombreRuta(text)}
                value={nombreRuta}
                placeholder={"Nombre ruta: "}/>
            <Text/>
            <Separator/>
            <Text style={textoCabeceraTarjeta}>{"Descripción:"}</Text>
            <TextInput
                style={estiloInput}
                multiline
                onChangeText={text=>setDescripcionRuta(text)}
                value={descripcionRuta}
                placeholder="Descripcion: "/>
            <Text/>
            <Separator/>
            <Text style={textoCabeceraTarjeta}>{"Distancia:"}</Text>
            <TextInput
                style={estiloInput}
                multiline
                onChangeText={text=>setDistanciaRuta(text)}
                value={distanciaRuta}
                placeholder="Distancia: "/>
            <Text/>
            <Separator/>
            <Text style={textoCabeceraTarjeta}>{"Duración:"}</Text>
            <TextInput
                style={estiloInput}
                multiline
                onChangeText={text=>setDuracionrecorridoRuta(text)}
                value={duracionrecorridoRuta}
                placeholder="Duracióm: "/>
            <Text/>
            <Separator/>
            <Text style={textoCabeceraTarjeta}>{"Difultad:"}</Text>
            <TextInput
                style={estiloInput}
                multiline
                onChangeText={text=>setDificultadRuta(text)}
                value={dificultadRuta}
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
                placeholder="Actividades: "/>
            <Text/>
            <Separator/>
            <Text style={textoCabeceraTarjeta}>{"Ficha técnica:"}</Text>
            <TextInput
                style={estiloInput}
                multiline
                onChangeText={text=>setFichatecnicaRuta(text)}
                value={fichatecnicaRuta}
                placeholder="Ficha tecnica: "/>
            <Text/>
            <Separator/>
            <Text style={textoCabeceraTarjeta}>{"Indumentaria:"}</Text>
            <TextInput
                style={estiloInput}
                multiline
                onChangeText={text=>setIndumentariaRuta(text)}
                value={indumentariaRuta}
                placeholder="Indumentaria: "/>
            <Text/>
            <Separator/>
            <Text style={textoCabeceraTarjeta}>{"Url del mapa de la ruta:"}</Text>
            <TextInput
                style={estiloInput}
                multiline
                onChangeText={text=>setUrlmapaRuta(text)}
                value={urlmapaRuta}
                placeholder="Mapa de la ruta: "/>
            <Text/>
            <Separator/>
            <Text style={textoCabeceraTarjeta}>{"Url del foto del ruta:"}</Text>
            <TextInput
                style={estiloInput}
                multiline
                onChangeText={text=>setUrlfotosRuta(text)}
                value={urlfotosRuta}
                placeholder="Url fotos: "/>
            <Separator/>

            <View style={{flexDirection:"row"}}>
                <Boton tituloBoton={"Actualizar ruta"} botonPresionado={()=>{
                    console.log(props.route.params.idRuta);
                    Axios.put(`http://192.168.100.16:9000/andariegos/actualizaruta/${props.route.params.idRuta}`,{

                        idrutas: props.route.params.idRuta,
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
                        if(coderr=="Ruta actualizada..."){
                            crearBotonAlerta("Actualizacion exitosa...");

                        }
                        else{
                            crearBotonAlerta("Error en actualizar ruta...");
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



export default FormRuta;
