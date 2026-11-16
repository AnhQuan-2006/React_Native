
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ProductCard from './ProductCard';

const danhSachSanPham = [
  {
    id: '1',
    ten: 'Điện thoại iPhone 16',
    gia: '22.000.000đ',
    moTa: 'Điện thoại thông minh, camera chất lượng cao, hiệu năng mạnh mẽ.',
    hinhAnh: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500'
  },
  {
    id: '2',
    ten: 'Laptop Dell Inspiron',
    gia: '16.500.000đ',
    moTa: 'Laptop phục vụ học tập, làm việc và giải trí.',
    hinhAnh: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500'
  },
  {
    id: '3',
    ten: 'Tai nghe Bluetooth',
    gia: '1.200.000đ',
    moTa: 'Tai nghe không dây, âm thanh rõ ràng, tiện lợi khi sử dụng.',
    hinhAnh: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
  },
  {
    id: '4',
    ten: 'Đồng hồ thông minh',
    gia: '2.500.000đ',
    moTa: 'Theo dõi sức khỏe, xem thông báo và hỗ trợ luyện tập.',
    hinhAnh: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'
  },
  {
    id: '5',
    ten: 'Máy ảnh kỹ thuật số',
    gia: '8.900.000đ',
    moTa: 'Chụp ảnh sắc nét, phù hợp cho du lịch và sáng tạo nội dung.',
    hinhAnh: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500'
  },
  {
    id: '6',
    ten: 'Loa Bluetooth',
    gia: '950.000đ',
    moTa: 'Loa di động nhỏ gọn, âm thanh sống động.',
    hinhAnh: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500'
  }
];

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <View style={{
        padding: 20,
        backgroundColor: '#2196F3'
      }}>
        <Text style={{
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          PRODUCT APP
        </Text>

        <Text style={{
          color: 'white',
          textAlign: 'center'
        }}>
          Cửa hàng thiết bị công nghệ
        </Text>
      </View>

      <FlatList
        data={danhSachSanPham}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            ten={item.ten}
            gia={item.gia}
            moTa={item.moTa}
            hinhAnh={item.hinhAnh}
          />
        )}
      />

    </View>
  );
}
