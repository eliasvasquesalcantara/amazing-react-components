import { UIEvent, useEffect, useRef, useState } from "react";
import {
  SCROLL_COUNTER_CONFIG_1_VAL,
  SCROLL_DOWN_NEXT,
  getArrAscOrder,
  getCircularSequence,
  getInitialValues,
} from "../utilities/scroll-picker";
import { IScrollCounterConfig } from "../utilities/types";

interface useScrollCounterOptions {
  scrollTopNext: number;
  handleChangeValue?: (n: number) => void;
  initialValue?: number;
  max?: number;
  min?: number;
  config?: IScrollCounterConfig;
}

const useScrollPicker = ({
  scrollTopNext,
  handleChangeValue,
  initialValue,
  min = 1,
  max = 100,
  config = SCROLL_COUNTER_CONFIG_1_VAL,
}: useScrollCounterOptions) => {
  const [values, setValues] = useState<number[]>([]);
  const [indexSelected, setIndexSelected] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const refFirstValDisplayed = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIndexSelected(config.indexSelected);

    if (initialValue === undefined) {
      setValues(getArrAscOrder(min, config.valuesLength));
      return;
    }

    setValues(getInitialValues(initialValue, config.valuesLength));
  }, []);

  useEffect(() => {
    const hasValuesOutLimit =
      values.filter((v) => v >= max || v <= min).length !== 0;

    if (hasValuesOutLimit) {
      let val: number = values[indexSelected];
      if (values[indexSelected] > max) val = max;
      if (values[indexSelected] < min) val = min;

      setValues(
        getCircularSequence({
          len: config.valuesLength,
          max,
          min,
          val,
        })
      );
    }
  }, [max, min]);


  useEffect(() => {
    if (handleChangeValue) handleChangeValue(values[indexSelected]);

    if (refFirstValDisplayed.current)
      refFirstValDisplayed.current.scrollIntoView();
  }, [values[indexSelected]]);

  const handleScrollDown = () => {
    setValues((curr) => {
      const newValues = curr.map((value) => value - 1);

      if (newValues.includes(min - 1)) {
        return newValues.map((v) => {
          if (v === min - 1) return max;
          return v;
        });
      }

      return newValues;
    });
  };

  const handleScrollUp = () => {
    setValues((curr) => {
      const newValues = curr.map((value) => value + 1);

      if (newValues.includes(max + 1)) {
        return newValues.map((v) => {
          if (v === max + 1) return min;
          return v;
        });
      }

      return newValues;
    });
  };

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop === SCROLL_DOWN_NEXT) handleScrollUp();
    if (e.currentTarget.scrollTop >= scrollTopNext) handleScrollDown();
  };

  return {
    ref,
    handleScroll,
    values,
    refFirstValDisplayed,
    indexValue: indexSelected,
    indexFirstValDisplayed: config.indexFirstValueDisplayed,
  };
};

export default useScrollPicker;
