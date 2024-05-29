import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Theme} from '../../constants/interfaces';
import colors from '../../constants/colors';

const width = Dimensions.get('screen').width;

export default function ResetButton(props: {
  theme: Theme['value'];
  active: boolean;
  onClick: any;
}) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors[props.theme].paleCard}]}
      activeOpacity={0.8}
      onPress={props.onClick}>
      <Text style={[styles.title, {color: colors[props.theme].comment}]}>
        Reset
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: width * 0.95,
    height: width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.05,
    marginBottom: width * 0.02,
  },
  title: {
    fontSize: width * 0.05,
  },
});
