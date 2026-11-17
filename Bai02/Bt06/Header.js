import React from 'react';
import { View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={{
      backgroundColor: '#E58B45',
      width: '100%',
      paddingVertical: 22,
      paddingHorizontal: 12,
      alignItems: 'center'
    }}>
      <Text style={{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
      }}>
        ScheduleApp 📅
      </Text>

      <Text style={{
        color: 'white',
        fontSize: 14,
        marginTop: 10
      }}>
        Nguyễn Anh Quân
      </Text>

      <Text style={{
        color: 'white',
        fontSize: 14,
        marginTop: 3
      }}>
        Lớp: CĐ-CNTT18A
      </Text>

      <Text style={{
        color: 'white',
        fontSize: 14,
        marginTop: 10
      }}>
        Thời khóa biểu cá nhân
      </Text>
    </View>
  );
}