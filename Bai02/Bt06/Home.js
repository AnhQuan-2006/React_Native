
import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import Header from './Header';
import WeekDays from './WeekDays';
import ScheduleList from './ScheduleList';

export default function Home() {
  const [selectedDay, setSelectedDay] = useState('Thứ 2');

  const schedules = [
    // THỨ 2
    {
      id: '1',
      day: 'Thứ 2',
      subject: 'Lịch Sử',
      room: '12C9',
      time: '07:00 - 08:35',
      teacher: 'Nguyễn Đức Cường',
      color: '#FFE2B5'
    },
    {
      id: '2',
      day: 'Thứ 2',
      subject: 'Toán Đại Hình',
      room: '12C9',
      time: '08:50 - 11:15',
      teacher: 'Huỳnh Thị Thanh Ngân',
      color: '#C8E6C9'
    },
    {
      id: '3',
      day: 'Thứ 2',
      subject: 'Thể Dục',
      room: 'Đa Năng',
      time: '13:00 - 14:35',
      teacher: 'Lê Bảo Nghĩa',
      color: '#BBDEFB'
    },

    // THỨ 3
    {
      id: '4',
      day: 'Thứ 3',
      subject: 'Địa Lí',
      room: '12C9',
      time: '07:00 - 08:35',
      teacher: 'Lê Bảo Phúc Khang',
      color: '#F8BBD0'
    },
    {
      id: '5',
      day: 'Thứ 3',
      subject: 'Vật Lý',
      room: '12C9',
      time: '08:50 - 11:15',
      teacher: 'Trần Quang Huy',
      color: '#D1C4E9'
    },
    

    // THỨ 4
    {
      id: '7',
      day: 'Thứ 4',
      subject: 'Ngữ Văn',
      room: '12C2',
      time: '07:00 - 08:35',
      teacher: 'Phạm Thị Hoa',
      color: '#FFCCBC'
    },
 
    {
      id: '9',
      day: 'Thứ 4',
      subject: 'Tiếng Anh',
      room: '12C2',
      time: '13:00 - 15:30',
      teacher: 'Trần Thị Ngọc mỹ',
      color: '#DCEDC8'
    },

    // THỨ 5
    {
      id: '10',
      day: 'Thứ 5',
      subject: 'Giáo Dục Công Dân',
      room: '12C9',
      time: '07:00 - 08:35',
      teacher: 'Trần Hữu Trí',
      color: '#D1C4E9'
    },
    {
      id: '11',
      day: 'Thứ 5',
      subject: 'Giáo Dục Quốc Phòng',
      room: 'Đa Năng',
      time: '08:50 - 11:15',
      teacher: 'Đỗ Duy Mạnh',
      color: '#FFE0B2'
    },
  

    // THỨ 6
    {
      id: '13',
      day: 'Thứ 6',
      subject: 'Tin Học',
      room: '12C9',
      time: '07:00 - 08:35',
      teacher: 'Nguyễn Đức Cường',
      color: '#FFF9C4'
    },
    {
      id: '14',
      day: 'Thứ 6',
      subject: 'Công Nghệ',
      room: '12C9',
      time: '09:45 - 11:15',
      teacher: 'Nguyễn Thị Hương',
      color: '#F8BBD0'
    },
    
  ];

  const filteredSchedules = schedules.filter(
    item => item.day === selectedDay
  );

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#FFF8F0'
    }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <Header />

        <WeekDays
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
        />

        <ScheduleList
          schedules={filteredSchedules}
          selectedDay={selectedDay}
        />
      </ScrollView>
    </View>
  );
}
