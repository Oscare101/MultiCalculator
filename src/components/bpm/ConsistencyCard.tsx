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
      color="#9AB2E0"
    />
  );
}
