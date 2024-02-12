export const calculatePercentageDifference = (firstNumber, secondNumber) => {
  const difference = secondNumber - firstNumber;
  return +((difference / firstNumber) * 100).toFixed(2);
};

export function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

export function disabledDateFunction(current) {
  const currentDate = new Date();
  return current && current > currentDate;
}

export function isToday(dateObject) {
  const today = new Date();
  return (
    dateObject.$y === today.getFullYear() &&
    dateObject.$M === today.getMonth() &&
    dateObject.$D === today.getDate()
  );
}

export function getRemainingHours() {
  const currentHour = new Date().getHours();
  const hoursInDay = 24;
  const remainingHours = [];

  for (let hour = currentHour + 1; hour < hoursInDay; hour++) {
    remainingHours.push(hour);
  }

  return remainingHours;
}

export function validateTime(h, m, s) {
  const currentDate = new Date();
  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const currentSeconds = currentDate.getSeconds();

  if (
    currentHours < h ||
    (currentHours === h && currentMinutes < m) ||
    (currentHours === h &&
      currentMinutes === m &&
      currentSeconds < s)
  ) {
    console.log("Текущее время больше желаемого времени.");
    return false
  } else {
    console.log("Текущее время меньше или равно равно желаемому времени.");
    return true
  }
}
