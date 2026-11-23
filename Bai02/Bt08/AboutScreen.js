
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F4F8F4' }}>
      <View style={{ padding: 20 }}>
        <Text style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#2E7D32'
        }}>
          Giới thiệu TravellingApp
        </Text>

        <View style={{
          backgroundColor: 'white',
          padding: 15,
          borderRadius: 12,
          marginTop: 15
        }}>
          <Text style={{ lineHeight: 25 }}>
            TravellingApp là ứng dụng khám phá sở thú, giúp người dùng tìm hiểu về các loài động vật thông qua hình ảnh và thông tin giới thiệu.
          </Text>

          <Text style={{ lineHeight: 25, marginTop: 10 }}>
            Ứng dụng cung cấp danh sách các loài động vật, thông tin về môi trường sống, thức ăn và đặc điểm của từng loài.
          </Text>

          <Text style={{ lineHeight: 25, marginTop: 10 }}>
            Người dùng có thể lưu các loài động vật yêu thích để dễ dàng tìm kiếm và xem lại.
          </Text>
        </View>

        <View style={{
          backgroundColor: '#E8F5E9',
          padding: 15,
          borderRadius: 12,
          marginTop: 15
        }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: '#2E7D32'
          }}>
            Mục tiêu ứng dụng
          </Text>

          <Text style={{ lineHeight: 25, marginTop: 10 }}>
            - Khám phá thế giới động vật.
          </Text>

          <Text style={{ lineHeight: 25 }}>
            - Tìm hiểu đặc điểm các loài.
          </Text>

          <Text style={{ lineHeight: 25 }}>
            - Lưu danh sách yêu thích.
          </Text>

          <Text style={{ lineHeight: 25 }}>
            - Nâng cao ý thức bảo vệ thiên nhiên.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
