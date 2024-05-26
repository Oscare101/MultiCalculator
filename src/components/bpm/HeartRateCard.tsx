import {Theme} from '../../constants/interfaces';
import {CalculateBPM} from '../../functions/bpmFunctions';
import CardTemplate from './CardTemplate';

export default function HeartRateCard(props: {
  theme: Theme['value'];
  timesArr: number[];
}) {
  return (
    <CardTemplate
      title="BPM"
      value={CalculateBPM(props.timesArr).toString()}
      icon="heartOutline"
      color="#F58965"
    />
  );
}
