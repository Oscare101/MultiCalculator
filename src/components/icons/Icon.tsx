import {SvgXml} from 'react-native-svg';
import {IconName} from '../../constants/interfaces';
import HeartOutline from './HeartOutline';
import TimerOutline from './TimerOutline';

export default function Icon(props: {
  name: IconName['value'];
  size: number;
  color: string;
}) {
  const icons: Record<IconName['value'], any> = {
    heartOutline: (
      <SvgXml
        xml={HeartOutline(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    timerOutline: (
      <SvgXml
        xml={TimerOutline(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
  };

  return icons[props.name];
}
