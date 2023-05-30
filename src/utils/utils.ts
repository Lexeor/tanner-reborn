export function timeFormat(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
}

export function compareDates(date1: Date, date2: Date) {
  if (date1 < date2) return -1;
  if (date1 > date2) return 1;

  return 0;
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

/** Format Date from String to "dd.MM.yyyy HH:mm" format */
export function formatDateTime(date: string | undefined): string {
  if (date) {
    const parsed: Date = new Date(date);

    const day: string = leadingZero(parsed.getDate()).toString();
    const month: string = leadingZero(parsed.getMonth()).toString();
    const year: string = leadingZero(parsed.getFullYear()).toString();
    const hours: string = leadingZero(parsed.getHours()).toString();
    const minutes: string = leadingZero(parsed.getMinutes()).toString();

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  } else return "";
}
