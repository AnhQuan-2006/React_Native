
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={true}
    >

      <Header />

      <View style={styles.content}>

        <Text style={styles.greeting}>
  Xin chào! 👋
  {'\n'}
  Chào mừng bạn đến với
  {'\n'}
  sổ tay công thức nấu ăn cá nhân.
</Text>

        <Text style={styles.heading}>
          Hôm nay bạn muốn nấu gì?
        </Text>

        <TextInput
          style={styles.search}
          placeholder="🔍 Tìm kiếm món ăn..."
          value={searchText}
          onChangeText={setSearchText}
        />

        <Text style={styles.categoryTitle}>
          Danh mục món ăn
        </Text>

        <View style={styles.categories}>

          <TouchableOpacity
            style={[
              styles.category,
              selectedCategory === 'Món nước' && styles.activeCategory
            ]}
            onPress={() => setSelectedCategory('Món nước')}
          >
            <Text style={styles.categoryText}>🍜 Món nước</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.category,
              selectedCategory === 'Món cơm' && styles.activeCategory
            ]}
            onPress={() => setSelectedCategory('Món cơm')}
          >
            <Text style={styles.categoryText}>🍚 Món cơm</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.category,
              selectedCategory === 'Món rau' && styles.activeCategory
            ]}
            onPress={() => setSelectedCategory('Món rau')}
          >
            <Text style={styles.categoryText}>🥗 Món rau</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.category,
              selectedCategory === 'Nước ép' && styles.activeCategory
            ]}
            onPress={() => setSelectedCategory('Nước ép')}
          >
            <Text style={styles.categoryText}>🥤 Nước ép</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity
          onPress={() => setSelectedCategory('Tất cả')}
        >
          <Text style={styles.all}>
            Xem tất cả món ăn
          </Text>
        </TouchableOpacity>

        <Main
          searchText={searchText}
          selectedCategory={selectedCategory}
        />

      </View>

      <Footer />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF9F5',
  },

  content: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  greeting: {
  fontSize: 14,
  textAlign: 'center',
  marginBottom: 15,
},

  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },

  search: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 17,
    fontSize: 17,
    borderWidth: 1,
    borderColor: '#eee',
  },

  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 25,
  },

  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    width: '100%',
  },

  category: {
    backgroundColor: '#FFE1CC',
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignItems: 'center',
  },

  activeCategory: {
    borderWidth: 2,
    borderColor: '#EF7629',
  },

  categoryText: {
    fontSize: 15,
    color: '#444',
  },

  all: {
    color: '#EF7629',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 22,
    marginBottom: 20,
  },
});
