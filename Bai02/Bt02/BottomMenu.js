import React from 'react';
import { View, Text } from 'react-native';

export default function BottomMenu() {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: 'white',
      paddingVertical: 12,
      borderTopWidth: 1,
      borderColor: '#DDDDDD'
    }}>
      <View>
        <Text style={{ textAlign: 'center' }}>🏠</Text>
        <Text>Trang chủ</Text>
      </View>

      <View>
        <Text style={{ textAlign: 'center' }}>📚</Text>
        <Text>Khóa học</Text>
      </View>

      <View>
        <Text style={{ textAlign: 'center' }}>📊</Text>
        <Text>Thống kê</Text>
      </View>

      <View>
        <Text style={{ textAlign: 'center' }}>👤</Text>
        <Text>Cá nhân</Text>
      </View>
    </View>
  );
}