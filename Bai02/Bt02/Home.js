import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Header from './Header';
import StatCard from './StatCard';
import CourseCard from './CourseCard';
import BottomMenu from './BottomMenu';

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: '#F5F6FA' }}>

      <ScrollView>
        <Header />

        <StatCard />

        <View style={{ padding: 15 }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 12
          }}>
            Danh sách môn học
          </Text>

          <CourseCard
            tenMon="Lập trình JavaScript"
            giangVien="Nguyễn Thanh Hải"
            tienDo={80}
          />

          <CourseCard
            tenMon="React Native"
            giangVien="Nguyễn Đức Cường"
            tienDo={60}
          />

          <CourseCard
            tenMon="Cơ sở dữ liệu"
            giangVien="huỳnh thị Thanh Ngân"
            tienDo={100}
          />

          <CourseCard
            tenMon="Thiết kế Web"
            giangVien="Nguyễn Anh Quân"
            tienDo={40}
          />

          <CourseCard
            tenMon="Node.js"
            giangVien="Trần Quang Huy"
            tienDo={20}
          />
        </View>
      </ScrollView>

      <BottomMenu />

    </View>
  );
}