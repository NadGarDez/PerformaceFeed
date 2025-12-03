import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    Animated,
    Easing,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const randomLike = Math.random() < 0.5;

const HeartButton = ({
  
}) => {
  const [liked, setLiked] = useState<boolean>(randomLike);
  const [scaleAnim] = useState(new Animated.Value(1));

  const handlePress = () => {
    const newLiked = !liked;

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

    setLiked(newLiked);
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
        <FontAwesome
            name={liked ? 'heart' : 'heart-o'}
            size={30}
            color={liked ? 'red' : 'gray'}
          />
      </Animated.View>
    </TouchableOpacity>
  );
};


export default HeartButton;