
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet
} from 'react-native';

export default function Welcome({ onStart }) {
  return (
    <View style={styles.container}>

      <View style={styles.top}>

        <Text style={styles.food}>
          🥗  🍜  🍕
        </Text>

        <Text style={styles.logo}>
          🍳 RECIPE COOK
        </Text>

        <Text style={styles.subtitle}>
          SỔ TAY CÔNG THỨC NẤU ĂN
        </Text>

        <Text style={styles.chef}>👨‍🍳</Text>

      </View>

      <View style={styles.content}>

        <Text style={styles.hello}>
          Xin chào! 👋
        </Text>

        <Text style={styles.welcome}>
          Chào mừng bạn đến với
          {'\n'}sổ tay công thức nấu ăn cá nhân!
        </Text>

        <Text style={styles.description}>
          Cùng khám phá thế giới ẩm thực,
          học cách chế biến những món ăn ngon
          và lưu giữ các công thức yêu thích.
        </Text>

        <View style={styles.foods}>
          <Text style={styles.foodItem}>🍲</Text>
          <Text style={styles.foodItem}>🍰</Text>
          <Text style={styles.foodItem}>🥤</Text>
          <Text style={styles.foodItem}>🍓</Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={onStart}
        >
          <Text style={styles.buttonText}>
            BẮT ĐẦU KHÁM PHÁ →
          </Text>
        </Pressable>

        <Text style={styles.bottom}>
          Nấu ăn ngon mỗi ngày ❤️
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF4E8',
  },

  top: {
    flex: 0.85,
    backgroundColor: '#F47721',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    padding: 10,
  },

  food: {
    fontSize: 23,
    marginBottom: 8,
  },

  logo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 8,
  },

  chef: {
    fontSize: 55,
    marginTop: 8,
  },

  content: {
    flex: 1.15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  hello: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#E96C20',
    marginBottom: 8,
  },

  welcome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#493326',
    textAlign: 'center',
    lineHeight: 24,
  },

  description: {
    fontSize: 13,
    color: '#745C4B',
    textAlign: 'center',
    lineHeight: 21,
    marginTop: 12,
  },

  foods: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 18,
  },

  foodItem: {
    fontSize: 27,
    marginHorizontal: 10,
  },

  button: {
    backgroundColor: '#F47721',
    paddingVertical: 13,
    paddingHorizontal: 28,
    borderRadius: 25,
    elevation: 3,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  bottom: {
    color: '#B76B37',
    marginTop: 12,
    fontSize: 12,
  },

});
