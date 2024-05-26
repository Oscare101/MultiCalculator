export function CalculateBPM(timesArr: number[]) {
  if (timesArr.length > 1) {
    let a: number[] = [];
    timesArr.forEach((time: number, index: number) => {
      if (index) {
        a.push(time - timesArr[index - 1]);
      }
    });
    const frequency = Math.floor(
      a.reduce((i: number, sum: number) => sum + i, 0) / a.length,
    );
    return Math.floor(60 / (frequency / 1000)) || '<0';
  }
  return 0;
}

export function CalculateFrequency(timesArr: number[]) {
  const msInSecond = 1000;
  const msInMinute = msInSecond * 60;
  const msInHour = msInMinute * 60;
  const msInDay = msInHour * 24;

  if (timesArr.length > 1) {
    let a: number[] = [];
    timesArr.forEach((time: number, index: number) => {
      if (index) {
        a.push(time - timesArr[index - 1]);
      }
    });
    const milliseconds = Math.floor(
      a.reduce((i: number, sum: number) => sum + i, 0) / a.length,
    );

    const days = Math.floor(milliseconds / msInDay);
    const hours = Math.floor(milliseconds / msInHour);
    const minutes = Math.floor(milliseconds / msInMinute);
    const seconds = (milliseconds / msInSecond).toFixed(1);

    if (days > 0) {
      return `${days} d`;
    } else if (hours > 0) {
      return `${hours} h`;
    } else if (minutes > 0) {
      return `${minutes} min`;
    } else if (milliseconds >= msInSecond) {
      return `${seconds} s`;
    } else {
      return `${milliseconds} ms`;
    }
  }
  return 0;
}

export function CalculateConsistency(timesArr: number[]) {
  if (timesArr.length > 1) {
    let a: number[] = [];
    timesArr.forEach((time: number, index: number) => {
      if (index) {
        a.push(time - timesArr[index - 1]);
      }
    });
    const milliseconds = Math.floor(
      a.reduce((i: number, sum: number) => sum + i, 0) / a.length,
    );
    let consistencyArr: number[] = [];
    a.forEach((time: number, index: number) => {
      consistencyArr.push(Math.abs(milliseconds - time));
    });
    const consistency = Math.floor(
      consistencyArr.reduce((i: number, sum: number) => sum + i, 0) /
        consistencyArr.length,
    );
    const percent = Math.ceil(
      Math.abs(100 - (consistency * 100) / milliseconds),
    );
    return percent + ' %';
  }
  return '-';
}
