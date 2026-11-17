
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>👨‍🍳 Recipe Book</Text>

      <Text style={styles.title}>Xin chào!</Text>

      <Text style={styles.description}>
        Chào mừng bạn đến với sổ tay công thức nấu ăn cá nhân.
      </Text>

      <Text style={styles.intro}>
        Khám phá những món ăn ngon, nguyên liệu cần thiết
        và cách chế biến đơn giản ngay tại nhà.
      </Text>

      <Text style={styles.food}>🍳 🥗 🍜 🍹</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('List')}
      >
        <Text style={styles.buttonText}>
          Xem danh sách món ăn
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#38734A',
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  description: {
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 26,
  },
  intro: {
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 20,
  },
  food: {
    fontSize: 35,
    marginVertical: 25,
  },
  button: {
    backgroundColor: '#38734A',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
