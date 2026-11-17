
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import ProgressCard from './ProgressCard';
import ActionButton from './ActionButton';
import AnimatedMessage from './AnimatedMessage';

export default function Home() {
  const [step, setStep] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const steps = [
    {
      title: 'Bước 1: Chuẩn bị nguyên liệu',
      content: 'Chuẩn bị 2 chén cơm nguội, 2 quả trứng gà, 1 củ cà rốt nhỏ, hành lá, tỏi, nước mắm, muối, tiêu và dầu ăn.',
      tip: 'Nên sử dụng cơm nguội để hạt cơm được tơi và không bị nhão khi chiên.'
    },
    {
      title: 'Bước 2: Sơ chế nguyên liệu',
      content: 'Cà rốt gọt vỏ, rửa sạch rồi thái hạt lựu. Hành lá rửa sạch và thái nhỏ. Tỏi bóc vỏ, băm nhuyễn. Đập 2 quả trứng vào bát và đánh đều.',
      tip: 'Thái cà rốt thành những miếng nhỏ để nhanh chín và dễ ăn.'
    },
    {
      title: 'Bước 3: Tiến hành chế biến',
      content: 'Đặt chảo lên bếp, cho dầu ăn và tỏi vào phi thơm. Tiếp theo cho cà rốt vào xào khoảng 2 phút. Đổ trứng vào đảo đều, sau đó cho cơm nguội vào chiên cùng. Nêm nước mắm, muối và tiêu vừa ăn.',
      tip: 'Đảo cơm đều tay trên lửa vừa để cơm nóng và tơi.'
    },
    {
      title: 'Bước 4: Trình bày món ăn',
      content: 'Khi cơm đã chín, cho hành lá vào đảo đều rồi tắt bếp. Múc cơm ra đĩa, có thể trang trí thêm hành lá và tiêu.',
      tip: 'Dùng cơm khi còn nóng để thưởng thức hương vị thơm ngon nhất.'
    }
  ];

  const currentStep = steps[step - 1];

  const handleNext = () => {
    if (step >= steps.length) {
      return;
    }

    setStep(step + 1);
    setShowMessage(true);
  };

  const progress = (step / steps.length) * 100;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.logo}>👨‍🍳 Recipe Book</Text>

      <Text style={styles.title}>Xin chào!</Text>

      <Text style={styles.subtitle}>
        Chào mừng bạn đến với sổ tay công thức nấu ăn cá nhân.
      </Text>

      <ProgressCard progress={progress} step={step} />

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          🍳 Hướng dẫn chế biến
        </Text>

        {!currentStep ? (
          <Text style={styles.description}>
            Chào mừng bạn đến với công thức cơm chiên trứng.
            Hãy nhấn nút bên dưới để bắt đầu tìm hiểu cách
            chế biến món ăn này nhé!
          </Text>
        ) : (
          <>
            <Text style={styles.stepTitle}>
              {currentStep.title}
            </Text>

            <Text style={styles.description}>
              {currentStep.content}
            </Text>

            <View style={styles.tipBox}>
              <Text style={styles.tip}>💡 Mẹo nhỏ:</Text>
              <Text>{currentStep.tip}</Text>
            </View>
          </>
        )}

        {step === 4 && (
          <Text style={styles.finish}>
            🎉 Chúc mừng! Bạn đã hoàn thành món cơm chiên trứng!
          </Text>
        )}
      </View>

      <ActionButton
        onPress={handleNext}
        disabled={step >= steps.length}
        title={
          step === 0
            ? 'Bắt đầu nấu ăn'
            : step >= steps.length
            ? 'Đã hoàn thành món ăn'
            : 'Hoàn thành bước tiếp theo'
        }
      />

      <AnimatedMessage
        visible={showMessage}
        message={
          step >= steps.length
            ? '🎉 Chúc mừng! Món ăn đã hoàn thành!'
            : currentStep
              ? '🍳 Đã hoàn thành ' + currentStep.title
              : ''
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F0',
    padding: 20,
  },
  logo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#38734A',
    marginTop: 35,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 12,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#38734A',
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 25,
  },
  tipBox: {
    backgroundColor: '#F0F7E9',
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
  },
  tip: {
    fontWeight: 'bold',
    color: '#38734A',
    marginBottom: 5,
  },
  finish: {
    color: '#188038',
    fontWeight: 'bold',
    marginTop: 15,
  },
});
