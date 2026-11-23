
import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';

export default function DateSelector({ selectedDate, onSelectDate }) {
  const dates = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    dates.push({
      fullDate: `${day}/${month}/${year}`,
      day: date.getDate(),
      weekday: date.toLocaleDateString('vi-VN', {
        weekday: 'short'
      })
    });
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {dates.map((date) => {
        const selected = selectedDate === date.fullDate;

        return (
          <Pressable
            key={date.fullDate}
            onPress={() => onSelectDate(date.fullDate)}
            style={{
              backgroundColor: selected ? '#4CAF50' : 'white',
              borderWidth: 1,
              borderColor: '#D6E5D6',
              borderRadius: 10,
              padding: 12,
              marginRight: 10,
              alignItems: 'center',
              minWidth: 65
            }}
          >
            <Text style={{ color: selected ? 'white' : '#333' }}>
              {date.weekday}
            </Text>

            <Text style={{
              color: selected ? 'white' : '#333',
              fontWeight: 'bold',
              marginTop: 5
            }}>
              {date.day}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
