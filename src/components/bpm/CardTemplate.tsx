import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from '../icons/Icon';
import {IconName, Theme} from '../../constants/interfaces';
import colors from '../../constants/colors';

const width = Dimensions.get('screen').width;

export default function CardTemplate(props: {
  title: string;
  value: string;
  icon: IconName['value'];
  color: string;
  theme: Theme['value'];
}) {
  return (
    <View style={[styles.card, {backgroundColor: props.color}]}>
      <View style={styles.rowBetween}>
        <Text style={[styles.cardTitle, {color: colors[props.theme].card}]}>
          {props.title}
        </Text>
        <Icon
          name={props.icon}
          color={colors[props.theme].card}
          size={width * 0.13}
        />
      </View>
      <Text style={[styles.cardValue, {color: colors[props.theme].card}]}>
        {props.value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.45,
    aspectRatio: 1.5,
    borderRadius: width * 0.05,
    padding: width * 0.03,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  rowBetween: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: width * 0.04,
  },
  cardValue: {fontSize: width * 0.08},
});
