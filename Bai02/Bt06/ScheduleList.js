
import React from 'react';
import { View, Text } from 'react-native';

export default function ScheduleList({ schedules, selectedDay }) {
  return (
    <View style={{ padding: 15 }}>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15
      }}>
        Lịch học {selectedDay}
      </Text>

      {schedules.length === 0 ? (
        <View style={{
          backgroundColor: '#FFE0C2',
          padding: 20,
          borderRadius: 10,
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#B45F20'
          }}>
            Không có lịch học!
          </Text>

          <Text style={{
            marginTop: 8,
            textAlign: 'center'
          }}>
            Ngày {selectedDay} hiện chưa có lịch học.
          </Text>
        </View>
      ) : (
        schedules.map((item) => (
          <View
            key={item.id}
            style={{
              backgroundColor: item.color,
              padding: 15,
              borderRadius: 10,
              marginBottom: 12
            }}
          >
            <Text style={{
              fontSize: 18,
              fontWeight: 'bold'
            }}>
              {item.subject}
            </Text>

            <Text style={{ marginTop: 8 }}>
              Thời gian: {item.time}
            </Text>

            <Text>
              Phòng học: {item.room}
            </Text>

            <Text>
              Giảng viên: {item.teacher}
            </Text>
          </View>
        ))
      )}
    </View>
  );
}
