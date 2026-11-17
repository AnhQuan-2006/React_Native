
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const recipes = [
  {
    id: '1',
    name: 'Cơm chiên trứng',
    icon: '🍳',
    time: '15 phút',
    ingredients: [
      '2 chén cơm nguội',
      '2 quả trứng gà',
      '1 củ cà rốt',
      'Hành lá và tỏi',
      'Gia vị: nước mắm, muối, tiêu'
    ],
    steps: [
      'Chuẩn bị cơm nguội, trứng gà, cà rốt, hành lá và tỏi. Nhặt bỏ phần hư của hành lá, rửa sạch cà rốt và hành.',
      'Gọt vỏ cà rốt rồi cắt thành hạt lựu nhỏ. Băm nhuyễn tỏi và thái nhỏ hành lá.',
      'Đập trứng vào tô, thêm một ít muối rồi đánh đều. Làm nóng chảo với một ít dầu ăn, cho tỏi vào phi thơm rồi đổ trứng vào đảo đều.',
      'Cho cà rốt vào xào khoảng 2–3 phút. Tiếp theo cho cơm nguội vào chảo, dùng muỗng đảo đều để cơm tơi ra và trộn cùng trứng.',
      'Nêm nước mắm, muối và tiêu cho vừa ăn. Đảo thêm vài phút cho cơm nóng đều, sau đó cho hành lá vào rồi tắt bếp.'
    ]
  },

  {
    id: '2',
    name: 'Mì xào rau củ',
    icon: '🍜',
    time: '20 phút',
    ingredients: [
      '2 vắt mì',
      '1 củ cà rốt',
      '1 ít cải xanh',
      '1/2 củ hành tây',
      'Gia vị: dầu ăn, nước tương, tiêu'
    ],
    steps: [
      'Chuẩn bị mì, cà rốt, cải xanh và hành tây. Rửa sạch các loại rau củ dưới vòi nước.',
      'Gọt vỏ cà rốt rồi thái sợi. Cắt cải xanh thành khúc vừa ăn và thái hành tây thành lát mỏng.',
      'Đun sôi một nồi nước, cho mì vào trụng đến khi mì vừa mềm rồi vớt ra để ráo. Không nên trụng quá lâu để mì không bị nhão.',
      'Làm nóng chảo với dầu ăn, cho hành tây và cà rốt vào xào trước. Khi cà rốt hơi mềm thì cho cải xanh vào đảo đều.',
      'Cho mì vào chảo, thêm nước tương và một ít tiêu. Đảo nhẹ tay để mì trộn đều với rau củ. Xào thêm vài phút rồi tắt bếp.'
    ]
  },

  {
    id: '3',
    name: 'Salad rau củ',
    icon: '🥗',
    time: '10 phút',
    ingredients: [
      '1 quả dưa leo',
      '1 quả cà chua',
      '1 củ cà rốt',
      'Rau xà lách',
      'Sốt mayonnaise hoặc nước sốt salad'
    ],
    steps: [
      'Chuẩn bị dưa leo, cà chua, cà rốt và rau xà lách. Chọn rau củ tươi, không bị dập hoặc hư.',
      'Rửa sạch tất cả nguyên liệu. Ngâm rau xà lách trong nước sạch, sau đó vớt ra để ráo.',
      'Thái dưa leo và cà chua thành lát vừa ăn. Gọt vỏ cà rốt rồi bào thành sợi nhỏ.',
      'Xếp rau xà lách, dưa leo, cà chua và cà rốt vào một chiếc tô lớn. Trộn nhẹ để các nguyên liệu được phân bố đều.',
      'Cho sốt mayonnaise hoặc nước sốt salad vào tô. Trộn đều trước khi ăn. Có thể để salad trong ngăn mát tủ lạnh một lúc để món ăn ngon hơn.'
    ]
  },

  {
    id: '4',
    name: 'Nước ép cam',
    icon: '🍊',
    time: '10 phút',
    ingredients: [
      '3 quả cam tươi',
      'Đường tùy khẩu vị',
      'Một ít nước lọc',
      'Đá viên'
    ],
    steps: [
      'Chọn những quả cam tươi, mọng nước và không bị dập. Rửa sạch vỏ cam dưới vòi nước.',
      'Dùng dao cắt đôi từng quả cam theo chiều ngang. Chuẩn bị máy vắt cam hoặc dụng cụ vắt bằng tay.',
      'Lần lượt vắt cam để lấy nước. Có thể lọc qua rây để loại bỏ hạt và phần tép cam quá lớn.',
      'Nếm thử nước cam. Nếu cam chua, có thể thêm một ít đường hoặc nước lọc rồi khuấy đều cho tan.',
      'Rót nước ép ra ly, thêm đá viên tùy thích. Trang trí bằng một lát cam nhỏ và thưởng thức ngay.'
    ]
  },

  {
    id: '5',
    name: 'Canh rau củ',
    icon: '🥣',
    time: '25 phút',
    ingredients: [
      '1 củ cà rốt',
      '1 củ khoai tây',
      '1 quả su su',
      'Hành lá',
      'Gia vị: muối, nước mắm, hạt nêm'
    ],
    steps: [
      'Chuẩn bị cà rốt, khoai tây, su su và hành lá. Rửa sạch các nguyên liệu trước khi chế biến.',
      'Gọt vỏ cà rốt, khoai tây và su su. Cắt các loại củ thành miếng vừa ăn để khi nấu chín đều.',
      'Đun sôi một nồi nước vừa đủ. Cho khoai tây và cà rốt vào nấu trước vì đây là những loại củ cần nhiều thời gian để mềm.',
      'Sau khoảng 5–7 phút, cho su su vào nồi. Nêm một ít muối, nước mắm và hạt nêm cho vừa khẩu vị.',
      'Tiếp tục nấu đến khi các loại rau củ mềm vừa ăn. Cho hành lá thái nhỏ vào, khuấy nhẹ rồi tắt bếp.'
    ]
  }
];

export default function ListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        📖 Các món ăn của tôi
      </Text>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate('Detail', { recipe: item })
            }
          >
            <Text style={styles.icon}>{item.icon}</Text>

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.time}>
                ⏱ Thời gian: {item.time}
              </Text>
              <Text style={styles.more}>
                Nhấn để xem công thức →
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F0',
    padding: 15,
  },

  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#38734A',
    marginBottom: 15,
  },

  item: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    fontSize: 38,
    marginRight: 15,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  time: {
    color: '#555',
    marginBottom: 5,
  },

  more: {
    color: '#38734A',
  },
});
