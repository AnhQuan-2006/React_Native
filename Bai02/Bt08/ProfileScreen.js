
import React from 'react';
import { View, Text } from 'react-native';
import ProfileInfo from './ProfileInfo';

export default function ProfileScreen() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#F4F8F4',
      padding: 15
    }}>
      <Text style={{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginBottom: 15
      }}>
        Thông tin cá nhân
      </Text>

      <ProfileInfo />

      <View style={{
        backgroundColor: '#E8F5E9',
        padding: 15,
        borderRadius: 12,
        marginTop: 15
      }}>
        <Text style={{
          fontWeight: 'bold',
          color: '#2E7D32',
          fontSize: 17
        }}>
          Chào mừng bạn đến TravellingApp!
        </Text>

        <Text style={{ marginTop: 8, lineHeight: 22 }}>
          Hãy cùng khám phá thế giới động vật, tìm hiểu những điều thú vị về thiên nhiên và lưu lại các loài động vật yêu thích.
        </Text>
      </View>
    </View>
  );
}
