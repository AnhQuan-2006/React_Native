
import React from 'react';
import { View, Text, Image } from 'react-native';

export default function ProductCard(props) {
  return (
    <View style={{
      flex: 1,
      margin: 6,
      padding: 8,
      borderWidth: 1,
      borderColor: '#CCCCCC',
      borderRadius: 10,
      backgroundColor: 'white'
    }}>

      <Image
        source={{ uri: props.hinhAnh }}
        style={{
          width: '100%',
          height: 110
        }}
        resizeMode="contain"
      />

      <Text style={{
        fontWeight: 'bold',
        marginTop: 8
      }}>
        {props.ten}
      </Text>

      <Text style={{
        color: 'red',
        marginTop: 5
      }}>
        Giá: {props.gia}
      </Text>

      <Text style={{
        fontWeight: 'bold',
        marginTop: 6
      }}>
        Mô tả:
      </Text>

      <Text style={{ marginTop: 4 }}>
        {props.moTa}
      </Text>

    </View>
  );
}
