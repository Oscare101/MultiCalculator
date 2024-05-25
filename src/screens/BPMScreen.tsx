import {
  Dimensions,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const width = Dimensions.get('screen').width;

export default function BPMScreen() {
  const [times, setTimes] = useState<number[]>([]);
  const [frequency, setFrequency] = useState<number>();

  function CalculateBPM() {
    if (times.length > 1) {
      let a: number[] = [];
      times.forEach((time: number, index: number) => {
        if (index) {
          a.push(time - times[index - 1]);
        }
      });
      setFrequency(
        Math.floor(a.reduce((i: number, sum: number) => sum + i, 0) / a.length),
      );
    }
  }

  function GetBPM() {
    return frequency ? Math.floor(60 / (frequency / 1000)) : 0;
  }

  useEffect(CalculateBPM, [times]);

  function HeartRateBlock() {
    return (
      <View style={styles.heartRateBlock}>
        <Text style={styles.cardTitle}>Beats per minute</Text>
        <Text style={styles.cardValue}>{GetBPM()}</Text>
      </View>
    );
  }

  function FrequencyBlock() {
    return (
      <View style={styles.heartRateBlock}>
        <Text style={styles.cardTitle}>frequency</Text>
        <Text style={styles.cardValue}>{frequency! / 1000}</Text>
      </View>
    );
  }

  const gridData = [<HeartRateBlock />, <FrequencyBlock />];

  function RenderItem({item}: any) {
    return item;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={gridData}
        numColumns={2}
        style={{gap: width * 0.05}}
        renderItem={RenderItem}
      />
      <Pressable
        onPressIn={() => setTimes([...times, Date.now()].slice(-5))}
        style={({pressed}) => [
          styles.press,
          {backgroundColor: pressed ? 'red' : '#96DC7E'},
        ]}>
        <Text>Press</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#1D2122',
  },

  press: {
    width: width * 0.4,
    aspectRatio: 1,
    borderRadius: width * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  heartRateBlock: {
    backgroundColor: '#F58965',
    width: width * 0.4,
    aspectRatio: 1.5,
    borderRadius: width * 0.05,
    borderCurve: 'circular',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: width * 0.04,
    color: '#010101',
    // backgroundColor: '#E6815F',
  },
  cardValue: {fontSize: width * 0.05, color: '#010101'},
});
