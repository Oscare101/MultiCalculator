import colors from '../../constants/colors';
import {Theme} from '../../constants/interfaces';
import {CalculateConsistency} from '../../functions/bpmFunctions';
import CardTemplate from './CardTemplate';

export default function ConsistencyCard(props: {
  theme: Theme['value'];
  timesArr: number[];
}) {
  return (
    <CardTemplate
      title="Consistency"
      value={CalculateConsistency(props.timesArr).toString()}
      icon="timerOutline"
      colors={colors[props.theme].blue.bg}
      theme={props.theme}
    />
  );
}
