import React, { useState } from 'react';
import {
    Button,
    KeyboardAvoidingView,
    Modal,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function Perfil() {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('Nombre Apellido');
  const [inputValue, setInputValue] = useState('');

  const openModal = () => {
    setInputValue(name);
    setModalVisible(true);
  };

  const saveName = () => {
    const trimmed = inputValue.trim();
    if (trimmed !== '') setName(trimmed);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{name}</Text>
      <Button title="Cambiar nombre" onPress={openModal} />

      <Modal visible={modalVisible} animationType="slide" transparent>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.modalOverlay}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Cambiar nombre</Text>
            <TextInput
              style={styles.input}
              value={inputValue}
              onChangeText={setInputValue}
              placeholder="Nuevo nombre y apellido"
              returnKeyType="done"
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={saveName}>
                <Text style={styles.modalButtonText}>Guardar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={[styles.modalButtonText, styles.cancelButtonText]}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
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
  nameText: {
    fontSize: 22,
    marginBottom: 12,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 16,
  },
  modalContent: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    elevation: 6,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 12,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#0a84ff',
    marginHorizontal: 6,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: '#eee',
  },
  cancelButtonText: {
    color: '#333',
  },
});
