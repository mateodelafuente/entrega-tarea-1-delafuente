import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import BotonTarjeta from "../components/botonTarjeta";

export default function Tarjetas() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <BotonTarjeta title="Tarjeta 1" onPress={() => console.log('Tarjeta 1')} />
      <BotonTarjeta title="Tarjeta 2" onPress={() => console.log('Tarjeta 2')} />
      <BotonTarjeta title="Tarjeta 3" onPress={() => console.log('Tarjeta 3')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
});
