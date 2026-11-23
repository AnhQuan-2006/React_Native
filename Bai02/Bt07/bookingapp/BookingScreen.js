
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Alert
} from 'react-native';

import DateSelector from './DateSelector';
import TimeSlot from './TimeSlot';
import BookingSummary from './BookingSummary';

export default function BookingScreen({ route, navigation }) {
  const { food, quantity } = route.params;

  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();

  const [selectedDate, setSelectedDate] = useState(
    `${day}/${month}/${year}`
  );

  const [selectedTime, setSelectedTime] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [guests, setGuests] = useState('2');

  const times = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00'
  ];

  const handleConfirm = () => {
    if (!customerName.trim()) {
      Alert.alert('Thông báo', 'Vui lòng nhập tên khách hàng!');
      return;
    }

    if (!selectedTime) {
      Alert.alert('Thông báo', 'Vui lòng chọn giờ đến nhà hàng!');
      return;
    }

    if (!guests || Number(guests) < 1) {
      Alert.alert('Thông báo', 'Vui lòng nhập số người hợp lệ!');
      return;
    }

    navigation.navigate('Confirmation', {
      food,
      quantity,
      date: selectedDate,
      time: selectedTime,
      customerName: customerName.trim(),
      guests
    });
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F4F8F4' }}>
      <View style={{ padding: 15 }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
          Chọn ngày đến nhà hàng
        </Text>

        <DateSelector
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />

        <Text style={{ fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>
          Chọn giờ
        </Text>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {times.map((time) => (
            <TimeSlot
              key={time}
              time={time}
              selectedTime={selectedTime}
              onSelectTime={setSelectedTime}
            />
          ))}
        </View>

        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>
          Tên khách hàng
        </Text>

        <TextInput
          value={customerName}
          onChangeText={setCustomerName}
          placeholder="Nhập tên khách hàng"
          style={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#D6E5D6',
            borderRadius: 10,
            padding: 12,
            marginTop: 10
          }}
        />

        <Text style={{ fontWeight: 'bold', marginTop: 15 }}>
          Số người đến ăn
        </Text>

        <TextInput
          value={guests}
          onChangeText={setGuests}
          placeholder="Nhập số người"
          keyboardType="numeric"
          style={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#D6E5D6',
            borderRadius: 10,
            padding: 12,
            marginTop: 10
          }}
        />

        <BookingSummary
          food={food}
          quantity={quantity}
          date={selectedDate}
          time={selectedTime}
          customerName={customerName}
          guests={guests}
        />

        <Pressable
          onPress={handleConfirm}
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
            Xác nhận đặt bàn
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: '#E0E8E0',
            padding: 15,
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 20
          }}
        >
          <Text style={{
            textAlign: 'center',
            color: '#333'
          }}>
            Quay lại chọn món
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
