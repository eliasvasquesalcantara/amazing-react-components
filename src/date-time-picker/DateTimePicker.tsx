'use client';

import classes from './css/date-time-picker.module.css';
import {
  generateFormatStringNumber,
  getDateAndTime,
  getFormatedDate,
  getFormatedTime,
} from "./utilities/date-time";
import useDateTimePicker from "./hooks/useDateTimePicker";
import Picker from './ScrollCounter';

interface DateTimePickerProps {
  epochMillisecInitial: number;
}

const DateTimePicker = ({ epochMillisecInitial }: DateTimePickerProps) => {
  const {
    daysMax,
    handleChangeDay,
    handleChangeHours,
    handleChangeMinutes,
    handleChangeMonth,
    handleChangeYear,
    date
  } = useDateTimePicker(epochMillisecInitial);

  return (
    <>
      <div style={{ fontSize: "25px" }}>{ getFormatedDate(date.getTime() / 1000) }</div>
      <div style={{ fontSize: "25px" }}>{ getFormatedTime(date.getTime() / 1000) }</div>

      <div className={classes["container"]}>
        <Picker
          title="Dia"
          initial={getDateAndTime(epochMillisecInitial).day}
          min={1}
          max={daysMax}
          handleChange={handleChangeDay}
          formatDate={generateFormatStringNumber(2)}
        />
        <Picker
          title="Mês"
          initial={getDateAndTime(epochMillisecInitial).month}
          min={1}
          max={12}
          handleChange={handleChangeMonth}
          formatDate={generateFormatStringNumber(2)}
        />
        <Picker
          title="Ano"
          initial={getDateAndTime(epochMillisecInitial).year}
          min={2000}
          max={2050}
          handleChange={handleChangeYear}
          formatDate={generateFormatStringNumber(4)}
        />
      </div>
      <div className={classes["container"]}>
        <Picker
          title="Hora"
          initial={getDateAndTime(epochMillisecInitial).hour}
          min={0}
          max={23}
          handleChange={handleChangeHours}
          formatDate={generateFormatStringNumber(2)}
        />
        <Picker
          title="Minutos"
          initial={getDateAndTime(epochMillisecInitial).minutes}
          min={0}
          max={59}
          handleChange={handleChangeMinutes}
          formatDate={generateFormatStringNumber(2)}
        />
      </div>
    </>
  );
};

export default DateTimePicker;
