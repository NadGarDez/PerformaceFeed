import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const ThreeDotsButton = () => {
  const handlePress = () => {
    console.log('Botón de opciones presionado');
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={styles.container}
    >
      <Ionicons
        name="ellipsis-horizontal"
        size={27}
        color="gray"
      />
    </TouchableOpacity>
  );
};