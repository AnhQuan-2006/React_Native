import React from 'react';
import { View, Text } from 'react-native';

export default function StatCard() {
  return (
    <View style={{ padding: 15 }}>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12
      }}>
        Thống kê khóa học
      </Text>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <View style={{
          flex: 1,
          backgroundColor: '#E5ECFF',
          padding: 12,
          borderRadius: 10,
          marginRight: 5
        }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#4169E1' }}>
            05
          </Text>
          <Text>Khóa học</Text>
        </View>

        <View style={{
          flex: 1,
          backgroundColor: '#E3F8EB',
          padding: 12,
          borderRadius: 10,
          marginHorizontal: 5
        }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#239B56' }}>
            03
          </Text>
          <Text>Hoàn thành</Text>
        </View>

        <View style={{
          flex: 1,
          backgroundColor: '#FFF0DC',
          padding: 12,
          borderRadius: 10,
          marginLeft: 5
        }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#E58B24' }}>
            02
          </Text>
          <Text>Đang học</Text>
        </View>
      </View>
    </View>
  );
}