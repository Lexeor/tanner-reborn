export function timeFormat(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
}

export function compareDates(date1: Date, date2: Date) {
  // Set time to 0 to compare only pure date
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);

  if (date1.toDateString() === date2.toDateString()) return true;
  else return false;
}

export function roundNumber(data: number) {
  return Math.round(data);
}

/** Adds a leading zero if number less than 10. */
const leadingZero = (number: number): string => {
  let result = String(number);
  for (let i = result.length; i < 2; ++i) {
    result = "0" + result;
  }
  return result;
};

/** Format Date from String to "dd.MM.yyyy HH:mm" format
 * adds UTC difference as well
 */
export function formatDateTime(date: string | undefined): string {
  if (date) {
    const parsed: Date = new Date(date);
    console.log("parsed", parsed.toUTCString());
    // add UTC difference
    parsed.setMinutes(parsed.getMinutes() + -1 * parsed.getTimezoneOffset());

    const day: string = leadingZero(parsed.getDate()).toString();
    const month: string = leadingZero(parsed.getMonth() + 1).toString();
    const year: string = leadingZero(parsed.getFullYear()).toString();
    const hours: string = leadingZero(parsed.getHours()).toString();
    const minutes: string = leadingZero(parsed.getMinutes()).toString();

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  } else return "";
}

/** Convert temperatue from Celsius to Fahrenheit */
export function toFahrenheit(temp: number) {
  return (temp * 9) / 5 + 32;
}

/** Convert wind speed from Meters per second to Miles per hour */
export function toMph(wind: number) {
  return Number(wind * 2.237).toFixed(2);
}
