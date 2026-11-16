import React from 'react';
import { View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={{
      backgroundColor: '#4169E1',
      padding: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20
    }}>
      <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>
        Xin chào! 👋
      </Text>

      <Text style={{ color: 'white', marginTop: 8 }}>
        Chào mừng bạn đến với LearningApp
      </Text>

      <View style={{
        backgroundColor: '#6685EA',
        padding: 15,
        borderRadius: 10,
        marginTop: 20
      }}>
        <Text style={{ color: 'white' }}>
          Họ và tên: Nguyễn Anh Quân
        </Text>

        <Text style={{ color: 'white', marginTop: 8 }}>
          Lớp: CĐ-CNTT18A
        </Text>
      </View>
    </View>
  );
}