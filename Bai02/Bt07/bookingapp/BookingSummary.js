
import React from 'react';
import { View, Text } from 'react-native';

export default function BookingSummary({
  food,
  quantity,
  date,
  time,
  customerName,
  guests
}) {
  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D6E5D6',
        marginTop: 15
      }}
    >
      <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
        Thông tin đặt bàn
      </Text>

      <Text>Món ăn: {food.name}</Text>

      <Text>Số lượng: {quantity}</Text>

      <Text>Ngày đến: {date}</Text>

      <Text>Giờ đến: {time || 'Chưa chọn'}</Text>

      <Text>Khách hàng: {customerName || 'Chưa nhập'}</Text>

      <Text>Số người: {guests || 'Chưa nhập'}</Text>

      <Text style={{
        color: '#2E7D32',
        fontWeight: 'bold',
        marginTop: 10
      }}>
        Tổng tiền: {(food.price * quantity).toLocaleString('vi-VN')}đ
      </Text>
    </View>
  );
}
