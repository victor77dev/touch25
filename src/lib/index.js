export function formatTimeInMs(time) {
  let date = new Date(null);
  date.setMilliseconds(time);
  return date.toISOString().substr(11, 12);
}
