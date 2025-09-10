import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>APP TAREA 2</Text>
      <Text style={styles.text}>🦑 AGUANTE PLATENSE VAMOS CALAMAR 🦑</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
});
