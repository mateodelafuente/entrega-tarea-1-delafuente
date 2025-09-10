import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Contador() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>Contador: {count}</Text>
      <Button title="Incrementar" onPress={() => setCount((c) => c + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  countText: {
    fontSize: 28,
    marginBottom: 12,
  },
});
