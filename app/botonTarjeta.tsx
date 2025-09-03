import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

//Propiedades que va a recibir nuestro boton
type Props = {
    title: string;
    onPress?: () => void; //Opcional
}

export default function BotonTarjeta({title, onPress}: Props) {
    const [active, setActive] = useState(false); //Estado del boton (empieza en falso)

    const presionadoDeBoton = () => {
        setActive(!active); //Cambia el estado al contrario
        if (onPress) onPress(); //Si se pasa una funcion onPress, se ejecuta
    }

    return(
        <TouchableOpacity
        onPress={presionadoDeBoton}
        style={{
        width: 300,
        height: 100,
        padding: 15,
        borderWidth: 3,
        borderColor: "black",
        marginBottom: 15,
        backgroundColor: active ? "green" : "white",
        alignItems: "center",
        }}
    >
        <Text style={{ color: active ? "white" : "black", fontSize: 20, alignContent: "center", marginTop: 25 }}>
        {title}
        </Text>
    </TouchableOpacity>
);
}