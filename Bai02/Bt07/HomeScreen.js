
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import ServiceCard from './ServiceCard';

const foods = [
  {
    id: 1,
    name: 'Phở bò',
    description: 'Phở bò truyền thống với nước dùng đậm đà',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800'
  },
  {
    id: 2,
    name: 'Cơm tấm sườn',
    description: 'Cơm tấm thơm ngon cùng sườn nướng',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800'
  },
  {
    id: 3,
    name: 'Bánh mì đặc biệt',
    description: 'Bánh mì giòn cùng nhiều loại nhân hấp dẫn',
    price: 30000,
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800'
  },
  {
    id: 4,
    name: 'Cơm chiên hải sản',
    description: 'Cơm chiên vàng với tôm và hải sản',
    price: 60000,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800'
  },
  {
    id: 5,
    name: 'Gỏi cuốn',
    description: 'Gỏi cuốn tươi ngon cùng nước chấm',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800'
  },
  {
    id: 6,
    name: 'Cà phê sữa đá',
    description: 'Cà phê Việt Nam thơm đậm vị',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800'
  }
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F4F8F4' }}>
      <View style={{ padding: 15 }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>
          Xin chào, quý khách!
        </Text>

        <Text style={{ color: '#666', marginBottom: 15 }}>
          Chào mừng đến với nhà hàng FoodBooking
        </Text>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000'
          }}
          style={{
            width: '100%',
            height: 200,
            borderRadius: 12
          }}
        />

        <Text style={{ fontWeight: 'bold', marginTop: 20, marginBottom: 5 }}>
          Thực đơn nhà hàng
        </Text>

        <Text style={{ color: '#666', marginBottom: 15 }}>
          Những món ăn ngon được chuẩn bị dành cho bạn
        </Text>

        {foods.map((food) => (
          <ServiceCard
            key={food.id}
            food={food}
            onPress={() =>
              navigation.navigate('ServiceDetail', { food })
            }
          />
        ))}
      </View>
    </ScrollView>
  );
}
