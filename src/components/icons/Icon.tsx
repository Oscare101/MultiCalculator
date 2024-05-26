import {SvgXml} from 'react-native-svg';
import {IconName} from '../../constants/interfaces';
import Heart from './Heart';

export default function Icon(props: {
  name: IconName['value'];
  size: number;
  color: string;
}) {
  const icons: Record<IconName['value'], any> = {
    heart: (
      <SvgXml xml={Heart(props.color)} width={props.size} height={props.size} />
    ),
  };

  return icons[props.name];
}
