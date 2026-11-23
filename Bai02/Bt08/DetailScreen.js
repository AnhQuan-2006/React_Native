
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default function DetailScreen({
  route,
  favorites = [],
  setFavorites
}) {
  const animal = route?.params?.animal;

  if (!animal) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Không tìm thấy thông tin động vật.</Text>
      </View>
    );
  }

  const favoriteList = Array.isArray(favorites) ? favorites : [];

  const isFavorite = favoriteList.some(
    item => item.id === animal.id
  );

  const toggleFavorite = () => {
    if (!setFavorites) return;

    if (isFavorite) {
      setFavorites(
        favoriteList.filter(item => item.id !== animal.id)
      );
    } else {
      setFavorites([...favoriteList, animal]);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F5F9F3' }}>
      
      {/* Hình ảnh động vật */}
      <Image
        source={{ uri: animal.image }}
        style={{
          width: '100%',
          height: 280
        }}
        resizeMode="cover"
      />

      <View style={{ padding: 15 }}>

        {/* Tên động vật */}
        <Text style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: '#2E7D32'
        }}>
          {animal.name}
        </Text>

        {/* Danh mục */}
        <Text style={{
          marginTop: 8,
          color: '#4CAF50',
          fontWeight: 'bold'
        }}>
          {animal.category}
        </Text>

        {/* Nút yêu thích */}
        <TouchableOpacity
          onPress={toggleFavorite}
          style={{
            backgroundColor: '#E8F5E9',
            padding: 12,
            borderRadius: 10,
            marginTop: 15,
            alignItems: 'center'
          }}
        >
          <Text style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#2E7D32'
          }}>
            {isFavorite
              ? '❤️ Đã thêm vào yêu thích'
              : '🤍 Thêm vào yêu thích'}
          </Text>
        </TouchableOpacity>

        {/* Giới thiệu */}
        <Text style={{
          fontSize: 19,
          fontWeight: 'bold',
          marginTop: 20,
          color: '#333333'
        }}>
          Giới thiệu
        </Text>

        <Text style={{
          fontSize: 15,
          lineHeight: 23,
          marginTop: 8,
          color: '#555555'
        }}>
          {animal.description}
        </Text>

        {/* Môi trường sống */}
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 20,
          color: '#2E7D32'
        }}>
          🌍 Môi trường sống
        </Text>

        <Text style={{
          fontSize: 15,
          marginTop: 8,
          color: '#555555'
        }}>
          {animal.habitat}
        </Text>

        {/* Thức ăn */}
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 20,
          color: '#2E7D32'
        }}>
          🍽️ Thức ăn
        </Text>

        <Text style={{
          fontSize: 15,
          marginTop: 8,
          color: '#555555'
        }}>
          {animal.food}
        </Text>

        {/* Chiều cao */}
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 20,
          color: '#2E7D32'
        }}>
          📏 Chiều cao
        </Text>

        <Text style={{
          fontSize: 15,
          marginTop: 8,
          color: '#555555'
        }}>
          {animal.height}
        </Text>

        {/* Cân nặng */}
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 20,
          color: '#2E7D32'
        }}>
          ⚖️ Cân nặng
        </Text>

        <Text style={{
          fontSize: 15,
          marginTop: 8,
          color: '#555555'
        }}>
          {animal.weight}
        </Text>

        {/* Tuổi thọ */}
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 20,
          color: '#2E7D32'
        }}>
          ⏳ Tuổi thọ
        </Text>

        <Text style={{
          fontSize: 15,
          marginTop: 8,
          color: '#555555'
        }}>
          {animal.lifespan}
        </Text>

        {/* Tập tính */}
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 20,
          color: '#2E7D32'
        }}>
          🐾 Tập tính
        </Text>

        <Text style={{
          fontSize: 15,
          lineHeight: 23,
          marginTop: 8,
          color: '#555555'
        }}>
          {animal.behavior}
        </Text>

        {/* Sự thật thú vị */}
        <View style={{
          backgroundColor: '#E8F5E9',
          padding: 15,
          borderRadius: 12,
          marginTop: 20,
          marginBottom: 25
        }}>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#2E7D32'
          }}>
            💡 Bạn có biết?
          </Text>

          <Text style={{
            fontSize: 15,
            lineHeight: 23,
            marginTop: 8,
            color: '#444444'
          }}>
            {animal.fact}
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}
