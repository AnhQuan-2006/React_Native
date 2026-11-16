
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Main({
  searchText = '',
  selectedCategory = 'Tất cả'
}) {

  const monAn = [
    {
      ten: 'Phở bò',
      hinh: '🍜',
      loai: 'Món nước',
      thoiGian: '60 phút',
      nguyenLieu: '300g thịt bò, 500g bánh phở, hành lá, rau thơm, gia vị.',
      cachLam: 'Bước 1: Ninh xương để lấy nước dùng. Bước 2: Trụng bánh phở qua nước sôi. Bước 3: Xếp thịt bò vào tô, thêm hành lá và chan nước dùng nóng.'
    },
    {
      ten: 'Cơm chiên trứng',
      hinh: '🍳',
      loai: 'Món cơm',
      thoiGian: '20 phút',
      nguyenLieu: '2 chén cơm nguội, 2 quả trứng gà, hành lá, dầu ăn, gia vị.',
      cachLam: 'Bước 1: Đập trứng vào tô và đánh đều. Bước 2: Phi thơm hành, cho trứng vào đảo chín. Bước 3: Thêm cơm nguội, đảo đều và nêm gia vị vừa ăn.'
    },
    {
      ten: 'Gà chiên nước mắm',
      hinh: '🍗',
      loai: 'Món cơm',
      thoiGian: '35 phút',
      nguyenLieu: '500g cánh gà, 2 muỗng nước mắm, tỏi băm, đường, dầu ăn.',
      cachLam: 'Bước 1: Rửa sạch gà và để ráo. Bước 2: Chiên gà đến khi vàng đều và chín bên trong. Bước 3: Phi thơm tỏi, thêm nước mắm và đường, cho gà vào đảo đều để thấm gia vị.'
    },
    {
      ten: 'Rau muống xào tỏi',
      hinh: '🥬',
      loai: 'Món rau',
      thoiGian: '15 phút',
      nguyenLieu: '1 bó rau muống, 4 tép tỏi, dầu ăn, muối và gia vị.',
      cachLam: 'Bước 1: Nhặt rau, rửa sạch và để ráo. Bước 2: Phi thơm tỏi với dầu ăn. Bước 3: Cho rau vào xào nhanh trên lửa lớn, nêm gia vị và đảo đều đến khi rau chín.'
    },
    {
      ten: 'Bún bò Huế',
      hinh: '🍲',
      loai: 'Món nước',
      thoiGian: '50 phút',
      nguyenLieu: '300g thịt bò, 300g giò heo, bún, sả, hành, gia vị.',
      cachLam: 'Bước 1: Sơ chế thịt và sả. Bước 2: Nấu thịt với nước dùng và sả đến khi chín mềm. Bước 3: Cho bún vào tô, thêm thịt, hành và chan nước dùng.'
    },

    // CÁC LOẠI NƯỚC ÉP

    {
      ten: 'Nước ép cam',
      hinh: '🍊',
      loai: 'Nước ép',
      thoiGian: '10 phút',
      nguyenLieu: '3 quả cam tươi, 1-2 muỗng đường (tùy khẩu vị), đá viên.',
      cachLam: 'Bước 1: Rửa sạch cam và cắt đôi. Bước 2: Dùng dụng cụ vắt cam để lấy nước, bỏ hạt. Bước 3: Thêm đường nếu thích, khuấy đều và cho đá viên vào thưởng thức.'
    },
    {
      ten: 'Nước ép dưa hấu',
      hinh: '🍉',
      loai: 'Nước ép',
      thoiGian: '10 phút',
      nguyenLieu: '300g dưa hấu, 1 muỗng nước cốt chanh, đá viên.',
      cachLam: 'Bước 1: Gọt vỏ dưa hấu, bỏ hạt và cắt thành miếng nhỏ. Bước 2: Cho dưa hấu vào máy ép hoặc máy xay, lọc qua rây nếu dùng máy xay. Bước 3: Thêm nước cốt chanh, khuấy đều và dùng lạnh.'
    },
    {
      ten: 'Nước ép dứa',
      hinh: '🍍',
      loai: 'Nước ép',
      thoiGian: '10 phút',
      nguyenLieu: '1/2 quả dứa chín, 1 muỗng đường (tùy chọn), đá viên.',
      cachLam: 'Bước 1: Gọt vỏ dứa, bỏ mắt và cắt thành miếng nhỏ. Bước 2: Cho dứa vào máy ép để lấy nước. Bước 3: Thêm đường nếu cần, khuấy đều và cho đá vào ly.'
    },
    {
      ten: 'Nước ép cà rốt',
      hinh: '🥕',
      loai: 'Nước ép',
      thoiGian: '10 phút',
      nguyenLieu: '2 củ cà rốt, 1/2 quả cam, một ít nước lọc.',
      cachLam: 'Bước 1: Gọt vỏ cà rốt, rửa sạch và cắt nhỏ. Bước 2: Cho cà rốt vào máy ép để lấy nước. Bước 3: Vắt thêm nước cam, khuấy đều và thưởng thức.'
    }
  ];

  const danhSach = monAn.filter((mon) => {

    const timKiem = mon.ten
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const danhMuc =
      selectedCategory === 'Tất cả' ||
      mon.loai === selectedCategory;

    return timKiem && danhMuc;
  });

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        ⭐ Công thức nổi bật
      </Text>

      {danhSach.map((mon, index) => (

        <View style={styles.card} key={index}>

          <Text style={styles.image}>
            {mon.hinh}
          </Text>

          <Text style={styles.name}>
            {mon.ten}
          </Text>

          <Text style={styles.time}>
            ⏰ Thời gian chuẩn bị: {mon.thoiGian}
          </Text>

          <View style={styles.line} />

          <Text style={styles.label}>
            🥕 Nguyên liệu:
          </Text>

          <Text style={styles.content}>
            {mon.nguyenLieu}
          </Text>

          <Text style={styles.label}>
            👨‍🍳 Cách chế biến:
          </Text>

          <Text style={styles.content}>
            {mon.cachLam}
          </Text>

        </View>

      ))}

      {danhSach.length === 0 && (
        <Text style={styles.empty}>
          Không tìm thấy món ăn!
        </Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },

  card: {
    width: '100%',
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#eee',
  },

  image: {
    fontSize: 55,
    textAlign: 'center',
    backgroundColor: '#FFE9D9',
    padding: 15,
    borderRadius: 15,
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#EF7629',
    marginTop: 15,
  },

  time: {
    fontSize: 15,
    color: '#888',
    marginTop: 10,
  },

  line: {
    height: 1,
    backgroundColor: '#eee',
    marginTop: 15,
  },

  label: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
  },

  content: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
    lineHeight: 25,
  },

  empty: {
    fontSize: 17,
    color: '#888',
    textAlign: 'center',
    margin: 20,
  },
});
