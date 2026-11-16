
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>

      <Text style={styles.title}>
        🍳 COOKBOOK
      </Text>

      <Text style={styles.text}>
        Sổ tay công thức nấu ăn
      </Text>

      <Text style={styles.text}>
        Lưu giữ hương vị gia đình ❤️
      </Text>

      <Text style={styles.copy}>
        © 2026 CookBook
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#FFE1CC',
    padding: 25,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#EF7629',
  },
  text: {
    fontSize: 16,
    marginTop: 8,
    color: '#444',
  },
  copy: {
    marginTop: 15,
    color: '#888',
  },
});
