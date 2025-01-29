// Reverse String
export function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

export function reverseString2(str) {
  return str.split('').reverse().join('');
}

// Capitalize First Letter
export function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// Sort String Alphabetically
export function sortStringAlphabetically(str) {
  return str.split('').sort().join('');
}

// Count Vowels
export function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

// Sum Of Numbers
export function sumOfNumbers(arr) {
  let acc = 0;
  for (let num of arr) {
    acc += num;
  }
  return acc;
}

export function sumOfNumbers2(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

// Find Max
export function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

export function findMax2(arr) {
  return Math.max(...arr);
}

// Convert Years to Age
export function convertYearsToAge(yearOfBirth) {
  const currentYear = new Date().getFullYear();
  return currentYear - yearOfBirth;
}

// File Type Detector
export function getFileType(fileName) {
  const imageExtensions = ['jpg', 'png', 'gif', 'bmp', 'jpeg'];
  const videoExtensions = ['mp4', 'avi', 'mov', 'mkv', 'flv'];
  const documentExtensions = ['docx', 'pdf', 'txt', 'pptx', 'xlsx'];
  const extension = fileName.split('.').pop().toLowerCase();

  if (imageExtensions.includes(extension)) return "It's image file";
  if (videoExtensions.includes(extension)) return "It's video file";
  if (documentExtensions.includes(extension)) return "It's document file";
  return "It's unknown file";
}

// Time Message
export function getTimeMessage(isoString) {
  const date = new Date(isoString); // Create a Date object from the ISO string
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // Array of days
  const hours = date.getHours(); // Get hours from date
  const minutes = date.getMinutes(); // Get minutes from date
  const day = days[date.getDay()]; // Get the day of the week
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12; // Format hours to 12-hour format
  const period = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
  const formattedMinutes = minutes.toString().padStart(2, '0'); // Format minutes to always have two digits
  let timeOfDay;

  // Determine time of day
  if (hours >= 6 && hours < 12) timeOfDay = 'morning';
  else if (hours >= 12 && hours < 18) timeOfDay = 'afternoon';
  else if (hours >= 18 && hours < 22) timeOfDay = 'evening';
  else timeOfDay = 'night';

  // Return the formatted time message
  return `Today is ${day}. It's ${formattedHours}:${formattedMinutes} ${period}. It's ${timeOfDay}.`;
}

// Years With Sunday on January 1st
export function getYearsWithSundayOnJanuaryFirst() {
  const sundayYears = [];
  for (let year = 2000; year <= 2050; year++) {
    const date = new Date(`${year}-01-01`);
    if (date.getDay() === 0) sundayYears.push(year);
  }
  return sundayYears;
}
