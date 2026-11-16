
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>🍳 CookBook</Text>
        <Text style={styles.subtitle}>
          Sổ tay công thức nấu ăn
        </Text>
      </View>

      <View style={styles.chef}>
        <Text style={{ fontSize: 35 }}>👨‍🍳</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#EF7629',
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginTop: 8,
  },
  chef: {
    backgroundColor: 'white',
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
