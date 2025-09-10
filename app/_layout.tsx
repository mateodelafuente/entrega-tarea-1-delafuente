import { Tabs } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Inicio" }} />
      <Tabs.Screen name="contador" options={{ title: 'Contador' }} />
      <Tabs.Screen name="tarjetas" options={{ title: 'Tarjetas' }} />
      <Tabs.Screen name="perfil" options={{ title: 'Perfil' }} />
    </Tabs>
  );
}