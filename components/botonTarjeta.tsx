import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  title: string;
  onPress?: () => void;
};

export default function BotonTarjeta({ title, onPress }: Props) {
  const [active, setActive] = useState(false);

  const presionadoDeBoton = () => {
    setActive(!active);
    if (onPress) onPress();
  };

  return (
    <TouchableOpacity
      onPress={presionadoDeBoton}
      activeOpacity={0.8}
      style={[styles.card, active ? styles.cardActive : styles.cardInactive]}
    >
      <Text style={[styles.title, active ? styles.titleActive : styles.titleInactive]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 100,
    padding: 15,
    borderWidth: 3,
    borderColor: 'black',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardActive: {
    backgroundColor: 'green',
  },
  cardInactive: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
  },
  titleActive: {
    color: 'white',
  },
  titleInactive: {
    color: 'black',
  },
});
