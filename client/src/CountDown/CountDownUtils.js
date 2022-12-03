import dayjs from "dayjs";

const CountDownUtilsTimeStamp = (timeStamp) => {
  const timeStampDayjs = dayjs(timeStamp);
  const nowDayjs = dayjs();

  return {
    seconds: getRemainingSeconds(nowDayjs, timeStampDayjs),
    minutes: getRemainingMinutes(nowDayjs, timeStampDayjs),
    hours: getRemainingHours(nowDayjs, timeStampDayjs),
    days: getRemainingDays(nowDayjs, timeStampDayjs),
  };
};

function getRemainingSeconds(nowDayjs, timeStampDayjs) {
  const second = timeStampDayjs.diff(nowDayjs, "seconds") % 60;
  return padWithZero(second, 2);
}
function getRemainingMinutes(nowDayjs, timeStampDayjs) {
  const minute = timeStampDayjs.diff(nowDayjs, "minutes") % 60;
  return padWithZero(minute, 2);
}
function getRemainingHours(nowDayjs, timeStampDayjs) {
  const hour = timeStampDayjs.diff(nowDayjs, "hours") % 24;
  return padWithZero(hour, 2);
}
function getRemainingDays(nowDayjs, timeStampDayjs) {
  const day = timeStampDayjs.diff(nowDayjs, "days");
  return day.toString();
}

function padWithZero(num, minLength) {
  const numString = num.toString();
  if (numString.length >= minLength) return numString;
  return "0".repeat(minLength - numString.length) + numString;
}

export default CountDownUtilsTimeStamp;
