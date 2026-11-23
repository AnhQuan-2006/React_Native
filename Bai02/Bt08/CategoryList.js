
import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';

export default function CategoryList({ selectedCategory, onSelect }) {
  const categories = [
    'Tất cả',
    'Động vật ăn thịt',
    'Động vật ăn cỏ',
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ flexDirection: 'row', marginBottom: 15 }}>
        {categories.map((category) => (
          <Pressable
            key={category}
            onPress={() => onSelect(category)}
            style={{
              backgroundColor:
                selectedCategory === category ? '#2E7D32' : '#E8F5E9',
              padding: 12,
              borderRadius: 20,
              marginRight: 10,
            }}
          >
            <Text style={{
              color: selectedCategory === category ? 'white' : '#2E7D32'
            }}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
