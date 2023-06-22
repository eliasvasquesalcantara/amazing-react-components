export const getFormatedDate = (secondsSinceEpoch: number) => {
  const milisecondsSinceEpoch = secondsSinceEpoch * 1000;
  const d = new Date(milisecondsSinceEpoch);
  return `${formatStringNumber(d.getDate())}
  /${formatStringNumber(d.getMonth() + 1)}
  /${formatStringNumber(d.getFullYear())}`;
};

export const getFormatedTime = (secondsSinceEpoch: number) => {
  const milisecondsSinceEpoch = secondsSinceEpoch * 1000;
  const d = new Date(milisecondsSinceEpoch);
  return `${formatStringNumber(d.getHours())}:${formatStringNumber(
    d.getMinutes()
  )}`;
};

export const generateFormatStringNumber = (quantDigits: number) => {
  return (value: string | number): string =>
    formatStringNumber(value, quantDigits);
};

export const formatStringNumber = (
  value: string | number,
  quantDigits = 2
): string => {
  if (Number.isNaN(Number(value))) return String(value);

  let formatedValue = String(value);
  if (formatedValue.length < quantDigits)
    formatedValue =
      "0".repeat(quantDigits - formatedValue.length) + formatedValue;

  return formatedValue;
};

export const getDateAndTime = (milisecondsSinceEpoch: number) => {
  const d = new Date(milisecondsSinceEpoch);
  return {
    day: d.getDate(),
    month: d.getMonth() + 1,
    year: d.getFullYear(),
    hour: d.getHours(),
    minutes: d.getMinutes(),
  };
};

export const getAmountDaysMonth = (year: number, month: number) => {
  // * month: 00-11
  const date = new Date(year, month, 15);
  date.setMonth(month + 1);
  date.setDate(0);
  return date.getDate();
};
