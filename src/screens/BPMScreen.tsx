import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Timespan} from 'react-native/Libraries/Utilities/IPerformanceLogger';

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
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPressIn={() => setTimes([...times, Date.now()].slice(-5))}
        style={({pressed}) => ({backgroundColor: pressed ? 'red' : 'green'})}>
        <Text>Press</Text>
      </Pressable>
      <Text>{frequency}</Text>
      <Text>{GetBPM()}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#374951',
  },
});
