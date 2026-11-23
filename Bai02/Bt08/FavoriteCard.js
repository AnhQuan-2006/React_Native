
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';

export default function FavoriteCard({ animal, onPress, onRemove }) {
  return (
    <View style={{
      flexDirection: 'row',
      backgroundColor: 'white',
      borderRadius: 12,
      marginBottom: 12,
      padding: 10,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#E0E0E0',
    }}>
      <Pressable onPress={onPress}>
        <Image
          source={{ uri: animal.image }}
          style={{
            width: 100,
            height: 90,
            borderRadius: 10
          }}
        />
      </Pressable>

      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: '#2E7D32'
        }}>
          {animal.name}
        </Text>

        <Text style={{ marginTop: 5, color: '#666666' }}>
          {animal.category}
        </Text>

        <Pressable onPress={onRemove} style={{ marginTop: 8 }}>
          <Text style={{ color: '#E53935' }}>
            Bỏ yêu thích
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
