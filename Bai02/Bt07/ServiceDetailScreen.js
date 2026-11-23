
import React, { useState } from 'react';
import { View, Text, Image, Pressable, ScrollView } from 'react-native';

export default function ServiceDetailScreen({ route, navigation }) {
  const { food } = route.params;
  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F4F8F4' }}>
      <View style={{ padding: 15 }}>
        <Image
          source={{ uri: food.image }}
          style={{
            width: '100%',
            height: 230,
            borderRadius: 12
          }}
        />

        <Text style={{ fontWeight: 'bold', marginTop: 15 }}>
          {food.name}
        </Text>

        <Text style={{ color: '#666', marginTop: 10 }}>
          {food.description}
        </Text>

        <Text style={{ color: '#2E7D32', fontWeight: 'bold', marginTop: 15 }}>
          Giá: {food.price.toLocaleString('vi-VN')}đ
        </Text>

        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>
          Số lượng
        </Text>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10
        }}>
          <Pressable
            onPress={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
            style={{
              backgroundColor: '#DCEEDD',
              padding: 12,
              borderRadius: 8
            }}
          >
            <Text>-</Text>
          </Pressable>

          <Text style={{ marginHorizontal: 25, fontWeight: 'bold' }}>
            {quantity}
          </Text>

          <Pressable
            onPress={() => setQuantity(quantity + 1)}
            style={{
              backgroundColor: '#DCEEDD',
              padding: 12,
              borderRadius: 8
            }}
          >
            <Text>+</Text>
          </Pressable>
        </View>

        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>
          Tổng tiền món ăn
        </Text>

        <Text style={{ color: '#2E7D32', marginTop: 8 }}>
          {(food.price * quantity).toLocaleString('vi-VN')}đ
        </Text>

        <Pressable
          onPress={() =>
            navigation.navigate('Booking', {
              food,
              quantity
            })
          }
          style={{
            backgroundColor: '#4CAF50',
            padding: 15,
            borderRadius: 10,
            marginTop: 25
          }}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
            Đặt món và đặt bàn
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
