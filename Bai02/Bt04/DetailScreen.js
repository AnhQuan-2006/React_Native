
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.icon}>{recipe.icon}</Text>

        <Text style={styles.title}>
          {recipe.name}
        </Text>

        <Text style={styles.time}>
          ⏱ Thời gian chế biến: {recipe.time}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>
          🥕 Nguyên liệu cần chuẩn bị
        </Text>

        {recipe.ingredients.map((item, index) => (
          <Text key={index} style={styles.content}>
            • {item}
          </Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>
          👨‍🍳 Cách chế biến chi tiết
        </Text>

        {recipe.steps.map((item, index) => (
          <View key={index} style={styles.step}>
            <Text style={styles.stepTitle}>
              Bước {index + 1}
            </Text>

            <Text style={styles.content}>
              {item}
            </Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>
          ← Quay lại danh sách món ăn
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F0',
    padding: 15,
  },

  header: {
    alignItems: 'center',
    padding: 15,
  },

  icon: {
    fontSize: 55,
    marginBottom: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#38734A',
    textAlign: 'center',
  },

  time: {
    marginTop: 10,
    color: '#555',
  },

  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#38734A',
    marginBottom: 15,
  },

  step: {
    marginBottom: 15,
  },

  stepTitle: {
    fontWeight: 'bold',
    color: '#38734A',
    marginBottom: 5,
  },

  content: {
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 8,
  },

  button: {
    backgroundColor: '#38734A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 25,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
