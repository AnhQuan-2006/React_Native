
import React from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';

import FavoriteCard from './FavoriteCard';

export default function FavoriteScreen({ navigation, favorites, setFavorites }) {
  const removeFavorite = (animal) => {
    setFavorites(favorites.filter((item) => item.id !== animal.id));
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F4F8F4', padding: 15 }}>
      <Text style={{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginBottom: 15
      }}>
        Động vật yêu thích ❤️
      </Text>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FavoriteCard
            animal={item}
            onPress={() => navigation.navigate('Detail', { animal: item })}
            onRemove={() => removeFavorite(item)}
          />
        )}
        ListEmptyComponent={
          <View style={{ alignItems: 'center', marginTop: 50 }}>
            <Text style={{ fontSize: 45 }}>♡</Text>

            <Text style={{
              color: '#777777',
              marginTop: 10
            }}>
              Bạn chưa có động vật yêu thích.
            </Text>

            <Text style={{ color: '#777777', marginTop: 5 }}>
              Hãy khám phá và lưu những loài bạn thích nhé!
            </Text>
          </View>
        }
      />
    </View>
  );
}
