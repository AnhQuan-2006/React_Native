
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';

export default function DestinationCard({ animal, onPress, isFavorite, onFavorite }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 15,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#E0E0E0',
      }}
    >
      <Image
        source={{ uri: animal.image }}
        style={{ width: '100%', height: 180 }}
      />

      <View style={{ padding: 12 }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#2E7D32'
          }}>
            {animal.name}
          </Text>

          <Pressable onPress={onFavorite}>
            <Text style={{ fontSize: 23 }}>
              {isFavorite ? '❤️' : '♡'}
            </Text>
          </Pressable>
        </View>

        <Text style={{ color: '#666666', marginTop: 5 }}>
          {animal.category}
        </Text>

        <Text style={{ color: '#2E7D32', marginTop: 8 }}>
          Xem chi tiết →
        </Text>
      </View>
    </Pressable>
  );
}
