import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    Animated,
    Easing,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const MessageButton = () => {
  const [scaleAnim] = useState(new Animated.Value(1));

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.3,
        duration: 100,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={styles.container}
    >
      <Animated.View
        style={[
          styles.iconContainer,
          { transform: [{ scale: scaleAnim }] },
        ]}
      >
        <Ionicons
          name="chatbubble-outline"
          size={25}
          color="gray"
        />
      </Animated.View>
    </TouchableOpacity>
  );
};