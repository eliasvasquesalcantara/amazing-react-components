import { useEffect, useState } from "react";
import { getAmountDaysMonth, getFormatedDate } from "../utilities/date-time";

const useDateTimePicker = (epochMillisecInitial: number) => {
  const [date, setDate] = useState<Date>(new Date());
  const [daysMax, setDaysMax] = useState<number>(28);

  useEffect(() => {
    const d = new Date(epochMillisecInitial);
    setDate(d);
    updateDaysMax(d.getFullYear(), d.getMonth());
    console.log(d.getFullYear())
  }, [epochMillisecInitial]);

  useEffect(() => {
    console.log(getFormatedDate(date.getDate()))
  })

  const updateDaysMax = (year: number, month: number) => {
    const dMonth = getAmountDaysMonth(year, month);
    setDaysMax(dMonth);
  };

  const handleChangeDay = (newValue: number) => {
    console.log('Changing day')
    setDate((currDate) => {
      const date = new Date(currDate.getTime())
      date.setDate(newValue);
      return date ;
    });
  };

  const handleChangeMonth = (newValue: number) => {
    console.log('Changing month')
    const newMonth = newValue - 1;
    setDate((currDate) => {
      const date = new Date(currDate.getTime())
      date.setMonth(newMonth);
      return date;
    });
    updateDaysMax(date.getFullYear(), newMonth);
  };

  const handleChangeYear = (newValue: number) => {
    setDate((currDate) => {
      const date = new Date(currDate.getTime())
      date.setFullYear(newValue);
      return date;
    });
  };

  const handleChangeHours = (newValue: number) => {
    setDate((currDate) => {
      const date = new Date(currDate.getTime())

      date.setHours(newValue);
      return date;
    });
  };

  const handleChangeMinutes = (newValue: number) => {
    setDate((currDate) => {
      const date = new Date(currDate.getTime())

      date.setMinutes(newValue);
      return date;
    });
  };

  return {
    handleChangeDay,
    handleChangeMonth,
    handleChangeYear,
    handleChangeHours,
    handleChangeMinutes,
    daysMax,
    date
  };
};

export default useDateTimePicker;
