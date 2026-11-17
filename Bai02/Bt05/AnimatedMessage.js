
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Text,
  StyleSheet,
} from 'react-native';

export default function AnimatedMessage({ visible, message }) {
  const scale = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    if (visible) {
      scale.setValue(0);
      translateY.setValue(30);

      Animated.parallel([
        Animated.spring(scale, {
          toValue: 1,
          friction: 5,
          tension: 80,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible, message]);

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.message,
        {
          opacity: scale,
          transform: [
            { scale: scale },
            { translateY: translateY },
          ],
        },
      ]}
    >
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  message: {
    backgroundColor: '#DFF5E1',
    padding: 20,
    borderRadius: 12,
    marginTop: 25,
  },
  text: {
    color: '#188038',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
