function humanReadable(time) {
  // 💬 Calculate hours
  let hours = Math.trunc(time / 3600) + '';

  // 💬 Calculate seconds minus hours calculated above
  let seconds = Math.abs(time - hours * 3600);

  // 💬 Calculate minutes with the seconds above
  let minutes = Math.trunc(seconds / 60) + '';

  // 💬 Calculate seconds minus minutes calculated above
  seconds = Math.abs(seconds - minutes * 60) + '';

  // 💬 Format hours, minutes and seconds based on rules
  if (hours.length === 1) hours = '0' + hours;
  if (minutes.length === 1) minutes = '0' + minutes;
  if (seconds.length === 1) seconds = '0' + seconds;

  // 💬 Concat in the correct format
  const realTime = `${hours}:${minutes}:${seconds}`;

  return realTime;
}

const result = humanReadable(60); // 🥚
console.log(result); // 🐣 '00:01:00'
