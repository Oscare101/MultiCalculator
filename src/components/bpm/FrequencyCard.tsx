import colors from '../../constants/colors';
import {Theme} from '../../constants/interfaces';
import {CalculateFrequency} from '../../functions/bpmFunctions';
import CardTemplate from './CardTemplate';

export default function FrequencyCard(props: {
  theme: Theme['value'];
  timesArr: number[];
}) {
  return (
    <CardTemplate
      title="Frequency"
      value={CalculateFrequency(props.timesArr).toString()}
      icon="timerOutline"
      color={colors[props.theme].green.bg}
    />
  );
}
