import { IScrollCounterConfig } from "./types";

/* CONSTANTS */
export const SCROLL_COUNTER_CONFIG_1_VAL: IScrollCounterConfig = {
  indexSelected: 1,
  indexFirstValueDisplayed: 1,
  quantityValuesDisplayed: 1,
  valuesLength: 3,
};

export const SCROLL_COUNTER_CONFIG_3_VAL: IScrollCounterConfig = {
  indexSelected: 2,
  indexFirstValueDisplayed: 1,
  quantityValuesDisplayed: 3,
  valuesLength: 5,
};

export const SCROLL_DOWN_NEXT = 0;

/* FUNCTIONS */
export const getInitialValues = (val: number, arrLength: number): number[] => {
  const values: number[] = [val];

  for (let i = 1; i <= arrLength / 2; i++) {
    values.push(val - i);
    values.unshift(val + i);
  }

  return values;
};

export const getArrAscOrder = (start: number, length: number) => {
  const values = [];
  for (let i = start; i < start + length; i++) {
    values.unshift(i);
  }
  return values;
};

interface getCircularSequenceArgs {
  val: number;
  max: number;
  min: number;
  len: number;
}
export const getCircularSequence = ({
  val,
  max,
  min,
  len,
}: getCircularSequenceArgs) => {
  const values: number[] = [val];

  let maxCount = 0;
  let minCount = 0;
  for (let i = 1; i <= len / 2; i++) {
    const decremented = val - i;
    if (decremented < min) {
      values.push(max - maxCount);
      maxCount++;
    } else {
      values.push(decremented);
    }

    const incremented = val + i;
    if (incremented > max) {
      values.unshift(min + minCount);
      minCount++;
    } else {
      values.unshift(incremented);
    }
  }

  return values;
};
