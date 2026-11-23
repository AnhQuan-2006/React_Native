
import React from 'react';
import { View, Text, Image } from 'react-native';

export default function ProfileInfo() {
  return (
    <View style={{
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 15,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#E0E0E0'
    }}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500'
        }}
        style={{
          width: 110,
          height: 110,
          borderRadius: 60
        }}
      />

      <Text style={{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginTop: 15
      }}>
        Nguyễn Anh Quân
      </Text>

      <Text style={{ marginTop: 5 }}>
        Sinh viên Công nghệ thông tin
      </Text>

      <View style={{ width: '100%', marginTop: 20 }}>
        <Text style={{ marginBottom: 12 }}>
          Họ và tên: Nguyễn Anh Quân
        </Text>

        <Text style={{ marginBottom: 12 }}>
          Lớp: CĐ-CNTT18A
        </Text>

        <Text style={{ marginBottom: 12 }}>
          Sở thích: Khám phá thiên nhiên
        </Text>

        <Text>
          Ứng dụng: TravellingApp
        </Text>
      </View>
    </View>
  );
}
