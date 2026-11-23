
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';

export default function ServiceCard({ food, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: 'white',
        borderRadius: 12,
        marginBottom: 15,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#DDE8DD'
      }}
    >
      <Image
        source={{ uri: food.image }}
        style={{
          width: '100%',
          height: 180
        }}
      />

      <View style={{ padding: 15 }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>
          {food.name}
        </Text>

        <Text style={{ color: '#666', marginBottom: 8 }}>
          {food.description}
        </Text>

        <Text style={{ color: '#2E7D32', fontWeight: 'bold' }}>
          {food.price.toLocaleString('vi-VN')}đ
        </Text>
      </View>
    </Pressable>
  );
}
