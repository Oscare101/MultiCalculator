import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from '../icons/Icon';
import {IconName} from '../../constants/interfaces';

const width = Dimensions.get('screen').width;

export default function CardTemplate(props: {
  title: string;
  value: string;
  icon: IconName['value'];
  color: string;
}) {
  return (
    <View style={[styles.heartRateBlock, {backgroundColor: props.color}]}>
      <View style={styles.rowBetween}>
        <Text style={styles.cardTitle}>{props.title}</Text>
        <Icon name={props.icon} color="#000" size={width * 0.13} />
      </View>
      <Text style={styles.cardValue}>{props.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heartRateBlock: {
    width: width * 0.4,
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
    color: '#010101',
  },
  cardValue: {fontSize: width * 0.08, color: '#010101'},
});