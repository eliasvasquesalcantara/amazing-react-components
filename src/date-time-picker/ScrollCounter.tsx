"use client";

import classes from "./css/date-time-picker.module.css";
import useScrollPicker from "./hooks/useScrollPicker";
import { SCROLL_COUNTER_CONFIG_3_VAL } from "./utilities/scroll-picker";

interface PickerProps {
  title: string;
  initial?: number;
  min?: number;
  max?: number;
  formatDate?: (value: number | string) => string;
  handleChange?: (value: number) => void;
}

const Picker = ({
  title,
  initial,
  min = 1,
  max = 100,
  formatDate,
  handleChange,
}: PickerProps) => {
  const {
    handleScroll,
    ref,
    indexFirstValDisplayed,
    refFirstValDisplayed,
    values,
    indexValue,
  } = useScrollPicker({
    handleChangeValue: handleChange,
    initialValue: initial,
    scrollTopNext: 80,
    max,
    min,
    config: SCROLL_COUNTER_CONFIG_3_VAL,
  });

  return (
    <div className={classes["counter__container"]}>
      <div className={classes["counter__title"]}>{title}</div>

      <div className={classes["counter__numbers"]} onScroll={handleScroll} ref={ref}>
        {values.map((value, index) => (
          <div
            className={`${classes["counter__number"]} ${
              index === indexValue ? classes["counter__number--selected"] : ""
            }`}
            ref={index === indexFirstValDisplayed ? refFirstValDisplayed : null}
          >
            {formatDate ? formatDate(value) : value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Picker;
