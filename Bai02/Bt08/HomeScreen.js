
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Alert
} from 'react-native';

import TravelHeader from './TravelHeader';
import CategoryList from './CategoryList';
import DestinationCard from './DestinationCard';

export default function HomeScreen({ navigation, animals, favorites, setFavorites }) {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  const filteredAnimals = animals.filter((animal) => {
    if (selectedCategory === 'Tất cả') {
      return true;
    }

    return animal.category === selectedCategory;
  });

  const toggleFavorite = (animal) => {
    const exists = favorites.some((item) => item.id === animal.id);

    if (exists) {
      setFavorites(favorites.filter((item) => item.id !== animal.id));
    } else {
      setFavorites([...favorites, animal]);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F4F8F4' }}>
      <View style={{ padding: 15 }}>
        <TravelHeader />

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#2E7D32',
          marginBottom: 12
        }}>
          Khám phá các loài
        </Text>

        <CategoryList
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#2E7D32',
          marginBottom: 12
        }}>
          Danh sách động vật
        </Text>

        <FlatList
          data={filteredAnimals}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <DestinationCard
              animal={item}
              onPress={() => navigation.navigate('Detail', { animal: item })}
              isFavorite={favorites.some((fav) => fav.id === item.id)}
              onFavorite={() => toggleFavorite(item)}
            />
          )}
          ListEmptyComponent={
            <Text style={{ textAlign: 'center', padding: 20 }}>
              Không có động vật trong danh mục này.
            </Text>
          }
        />
      </View>
    </ScrollView>
  );
}
