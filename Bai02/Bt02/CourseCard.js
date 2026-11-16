import React from 'react';
import { View, Text } from 'react-native';

export default function CourseCard({ tenMon, giangVien, tienDo }) {
  return (
    <View style={{
      backgroundColor: 'white',
      padding: 15,
      marginBottom: 12,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#DDDDDD'
    }}>
      <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
        {tenMon}
      </Text>

      <Text style={{ color: '#777777', marginTop: 6 }}>
        Giảng viên: {giangVien}
      </Text>

      <Text style={{ marginTop: 10 }}>
        Tiến độ: {tienDo}%
      </Text>

      <View style={{
        height: 8,
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        marginTop: 8
      }}>
        <View style={{
          width: tienDo + '%',
          height: 8,
          backgroundColor: '#4169E1',
          borderRadius: 10
        }} />
      </View>
    </View>
  );
}