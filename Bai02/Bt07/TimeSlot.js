
import React from 'react';
import { Text, Pressable } from 'react-native';

export default function TimeSlot({ time, selectedTime, onSelectTime }) {
  const selected = time === selectedTime;

  return (
    <Pressable
      onPress={() => onSelectTime(time)}
      style={{
        width: '30%',
        padding: 12,
        margin: 5,
        borderRadius: 8,
        backgroundColor: selected ? '#4CAF50' : 'white',
        borderWidth: 1,
        borderColor: selected ? '#4CAF50' : '#D6E5D6'
      }}
    >
      <Text style={{
        textAlign: 'center',
        color: selected ? 'white' : '#333'
      }}>
        {time}
      </Text>
    </Pressable>
  );
}
