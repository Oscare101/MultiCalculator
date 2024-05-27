import {
  Dimensions,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../constants/colors';
import HeartRateCard from '../components/bpm/HeartRateCard';
import FrequencyCard from '../components/bpm/FrequencyCard';
import ConsistencyCard from '../components/bpm/ConsistencyCard';

const width = Dimensions.get('screen').width;

export default function BPMScreen() {
  const [times, setTimes] = useState<number[]>([]);
  const theme = 'dark';

  const gridData = [
    <HeartRateCard theme={theme} timesArr={times} />,
    <FrequencyCard theme={theme} timesArr={times} />,
    <ConsistencyCard theme={theme} timesArr={times} />,
  ];

  function RenderItem({item}: any) {
    return item;
  }

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[theme].bg}]}>
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
          {
            backgroundColor: pressed
              ? colors[theme].paleCard
              : colors[theme].card,
          },
        ]}>
        <Text style={[styles.pressTitle, {color: colors[theme].main}]}>
          Press
        </Text>
        <Text style={[styles.pressComment, {color: colors[theme].comment}]}>
          Only last 5 click are counted
        </Text>
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
    width: width * 0.95,
    aspectRatio: 1.5,
    borderRadius: width * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: width * 0.025,
  },
  pressTitle: {
    fontSize: width * 0.1,
  },
  pressComment: {fontSize: width * 0.05, fontWeight: '300'},
});
