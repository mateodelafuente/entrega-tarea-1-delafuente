import { View } from "react-native";
import BotonTarjeta from "./botonTarjeta";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BotonTarjeta title="Tarjeta 1" onPress={() => console.log("Tarjeta 1")} />
      <BotonTarjeta title="Tarjeta 2" onPress={() => console.log("Tarjeta 2")} />
      <BotonTarjeta title="Tarjeta 3" onPress={() => console.log("Tarjeta 3")} />
    </View>
  );
} 
