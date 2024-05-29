import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import {Theme} from '../../constants/interfaces';
import colors from '../../constants/colors';

const width = Dimensions.get('screen').width;

export default function IndicatorsBlock(props: {
  theme: Theme['value'];
  timesArr: number[];
  tapsAmount: number;
}) {
  return (
    <View style={styles.row}>
      {[...Array(props.tapsAmount)].map((_: any, index: number) => (
        <View
          key={index}
          style={[
            styles.indicator,
            {
              backgroundColor:
                props.timesArr.length >= props.tapsAmount - index
                  ? colors[props.theme].green.bg
                  : colors[props.theme].paleCard,
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.5,
    marginBottom: width * 0.05,
  },
  indicator: {width: width * 0.05, aspectRatio: 1, borderRadius: width * 0.05},
});
