
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default function WeekDays({ selectedDay, onSelectDay }) {
  const days = [
    'Thứ 2',
    'Thứ 3',
    'Thứ 4',
    'Thứ 5',
    'Thứ 6',
    'Thứ 7',
    'Chủ nhật'
  ];

  // Tính ngày thứ Hai của tuần hiện tại
  const today = new Date();
  const monday = new Date(today);
  const dayOfWeek = today.getDay();

  monday.setDate(
    today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1)
  );

  const dates = days.map((day, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);

    return `${date.getDate()}/${date.getMonth() + 1}`;
  });

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 16,
        marginBottom: 12
      }}>
        Chọn ngày học
      </Text>

      <View style={{
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
      }}>
        {days.map((day, index) => (
          <TouchableOpacity
            key={day}
            onPress={() => onSelectDay(day)}
            style={{
              flex: 1,
              marginHorizontal: 2,
              paddingVertical: 9,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                selectedDay === day ? '#E58B45' : '#FFE0C2',
              borderRadius: 9
            }}
          >
            <Text style={{
              color: selectedDay === day ? 'white' : '#333',
              fontWeight: 'bold',
              fontSize: 10
            }}>
              {day === 'Chủ nhật' ? 'CN' : day.replace('Thứ ', 'T')}
            </Text>

            <Text style={{
              color: selectedDay === day ? 'white' : '#333',
              fontSize: 9,
              marginTop: 5
            }}>
              {dates[index]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
