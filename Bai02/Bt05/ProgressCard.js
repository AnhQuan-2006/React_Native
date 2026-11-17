
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProgressCard({ progress, step }) {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>🍲 Món ăn hôm nay</Text>

      <Text style={styles.foodName}>Cơm chiên trứng</Text>

      <Text style={styles.description}>
        Công thức chế biến món cơm chiên trứng thơm ngon.
      </Text>

      <Text style={styles.percent}>{progress}%</Text>

      <View style={styles.progressBackground}>
        <View
          style={[
            styles.progressFill,
            { width: `${progress}%` },
          ]}
        />
      </View>

      <Text style={styles.description}>
        Đã hoàn thành {step}/4 bước chế biến
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  foodName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#38734A',
  },
  description: {
    marginTop: 10,
    lineHeight: 22,
  },
  percent: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  progressBackground: {
    height: 12,
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: 12,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
  },
});
