import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Theme} from '../../constants/interfaces';
import Icon from '../icons/Icon';
import {CalculateBPM, CalculateFrequency} from '../../functions/bpmFunctions';

const width = Dimensions.get('screen').width;

export default function FrequencyCard(props: {
  theme: Theme['value'];
  timesArr: number[];
}) {
  return (
    <View style={styles.heartRateBlock}>
      <Text style={styles.cardTitle}>Frequency</Text>
      <Text style={styles.cardValue}>{CalculateFrequency(props.timesArr)}</Text>
      <Icon name="heart" color="#000" size={width * 0.05} />
    </View>
  );
}

const styles = StyleSheet.create({
  heartRateBlock: {
    backgroundColor: '#96DC7E',
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
  },
  cardValue: {fontSize: width * 0.05, color: '#010101'},
});
