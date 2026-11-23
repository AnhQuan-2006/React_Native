
import React from 'react';
import { View, Text } from 'react-native';

export default function TravelHeader() {
  return (
    <View style={{
      backgroundColor: '#2E7D32',
      padding: 20,
      borderRadius: 15,
      marginBottom: 15
    }}>
      <Text style={{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
      }}>
        Khám phá sở thú
      </Text>

      <Text style={{
        color: 'white',
        marginTop: 8
      }}>
        Cùng tìm hiểu thế giới động vật thú vị
      </Text>

      <Text style={{
        color: '#E8F5E9',
        marginTop: 5
      }}>
        Khám phá thiên nhiên mỗi ngày
      </Text>
    </View>
  );
}
