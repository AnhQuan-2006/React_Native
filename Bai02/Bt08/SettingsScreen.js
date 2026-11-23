
import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#F4F8F4',
      padding: 15
    }}>
      <Text style={{
        fontSize: 23,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginBottom: 15
      }}>
        Cài đặt
      </Text>

      <View style={{
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
            Thông báo
          </Text>

          <Text style={{ color: '#777777', marginTop: 5 }}>
            Bật hoặc tắt thông báo ứng dụng
          </Text>
        </View>

        <Switch
          value={notifications}
          onValueChange={setNotifications}
          trackColor={{ false: '#CCCCCC', true: '#81C784' }}
          thumbColor={notifications ? '#2E7D32' : '#F4F3F4'}
        />
      </View>

      <View style={{
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 12,
        marginTop: 15
      }}>
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
          Phiên bản ứng dụng
        </Text>

        <Text style={{ color: '#777777', marginTop: 8 }}>
          TravellingApp 1.0.0
        </Text>
      </View>

      <View style={{
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 12,
        marginTop: 15
      }}>
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
          Giao diện
        </Text>

        <Text style={{ color: '#777777', marginTop: 8 }}>
          Xanh lá cây – Trắng
        </Text>
      </View>
    </View>
  );
}
