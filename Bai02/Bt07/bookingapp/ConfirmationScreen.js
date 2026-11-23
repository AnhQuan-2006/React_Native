
import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';

export default function ConfirmationScreen({ route, navigation }) {
  const {
    food,
    quantity,
    date,
    time,
    customerName,
    guests
  } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F4F8F4' }}>
      <View style={{
        padding: 20,
        justifyContent: 'center'
      }}>
        <View style={{
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 15,
          borderWidth: 1,
          borderColor: '#D6E5D6'
        }}>
          <Text style={{
            textAlign: 'center',
            color: '#2E7D32',
            fontWeight: 'bold',
            marginBottom: 15
          }}>
            Đặt bàn thành công!
          </Text>

          <Text style={{ textAlign: 'center', marginBottom: 20 }}>
            Cảm ơn quý khách đã lựa chọn nhà hàng FoodBooking.
          </Text>

          <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
            Chi tiết đặt bàn
          </Text>

          <Text>Khách hàng: {customerName}</Text>

          <Text>Số người: {guests}</Text>

          <Text>Ngày đến: {date}</Text>

          <Text>Giờ đến: {time}</Text>

          <Text style={{ marginTop: 10, fontWeight: 'bold' }}>
            Thông tin món ăn
          </Text>

          <Text>Món ăn: {food.name}</Text>

          <Text>Số lượng: {quantity}</Text>

          <Text>Đơn giá: {food.price.toLocaleString('vi-VN')}đ</Text>

          <Text style={{
            color: '#2E7D32',
            fontWeight: 'bold',
            marginTop: 15
          }}>
            Tổng tiền: {(food.price * quantity).toLocaleString('vi-VN')}đ
          </Text>

          <Text style={{
            color: '#666',
            marginTop: 15,
            textAlign: 'center'
          }}>
            Hẹn gặp quý khách tại nhà hàng!
          </Text>

          <Pressable
            onPress={() => navigation.popToTop()}
            style={{
              backgroundColor: '#4CAF50',
              padding: 15,
              borderRadius: 10,
              marginTop: 20
            }}
          >
            <Text style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold'
            }}>
              Về trang chủ
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
