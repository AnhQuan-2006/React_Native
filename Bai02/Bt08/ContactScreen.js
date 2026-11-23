
import React from 'react';
import { View, Text } from 'react-native';

export default function ContactScreen() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#F4F8F4',
      padding: 20
    }}>
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginBottom: 15
      }}>
        Liên hệ
      </Text>

      <View style={{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 12
      }}>
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#2E7D32'
        }}>
          TravellingApp
        </Text>

        <Text style={{ marginTop: 15, lineHeight: 25 }}>
          Nếu bạn có thắc mắc hoặc góp ý về ứng dụng, vui lòng liên hệ với chúng tôi.
        </Text>

        <Text style={{ marginTop: 15 }}>
          Người thực hiện: Nguyễn Anh Quân
        </Text>

        <Text style={{ marginTop: 10 }}>
          Lớp: CĐ-CNTT18A
        </Text>

        <Text style={{ marginTop: 10 }}>
          Email: support@travellingapp.com
        </Text>

        <Text style={{ marginTop: 10 }}>
          Ứng dụng khám phá thế giới động vật.
        </Text>
      </View>
    </View>
  );
}
