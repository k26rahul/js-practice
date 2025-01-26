// test

function getLastDay(month, year) {
  if (month == 4 || month == 6 || month == 9 || month == 11) {
    return 30;
  } else if (month != 2) {
    return 31;
  } else {
    if (year % 4 == 0) {
      return 29;
    }
    return 28;
  }
}

let y1 = 2024;
let m1 = 12;
let d1 = 25;

let y2 = 2025;
let m2 = 1;
let d2 = 5;

let N = 0;

while (true) {
  N++;

  if (d1 < getLastDay(m1, y1)) {
    d1++;
  } else {
    // d1 = 30 (for 30 days months)
    // d1 = 31 (for 31 days months)
    // d1 = 28 (for non-leap feb)
    // d1 = 29 (for leap feb)
    // CANNOT INCREMENT DAY, MOVE TO NEXT MONTH
    d1 = 1;
    m1++;
    if (m1 == 13) {
      m1 = 1;
      y1++;
    }
  }

  if (y1 == y2 && m1 == m2 && d1 == d2) {
    break;
  }

  // break; // to avoid crashing during testing
}

console.log({ N });
