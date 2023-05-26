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
