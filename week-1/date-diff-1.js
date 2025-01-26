// test

let y1 = 2025;
let m1 = 2;
let d1 = 27;

let y2 = 2025;
let m2 = 3;
let d2 = 2;

let N = 0;

while (true) {
  N++;

  // do increments
  if (m1 == 4 || m1 == 6 || m1 == 9 || m1 == 11) {
    // 30 wale months
    if (d1 < 30) {
      d1++;
    } else {
      // d1 is 30 (cannot increment)
      d1 = 1;
      m1++;
    }
  } else if (m1 != 2) {
    // 31 wale months
    if (d1 < 31) {
      d1++;
    } else {
      // d1 is 31 (cannot increment)
      d1 = 1;
      if (m1 == 12) {
        // December
        m1 = 1;
        y1++;
      } else {
        // Not December
        m1++;
      }
    }
  } else {
    // Feb
    if (d1 < 28) {
      d1++;
    } else {
      // should i increment?
      if (y1 % 4 == 0 && d1 == 28) {
        // it's a leap year
        d1++;
      } else {
        // Not a leap year OR day=29 reached
        d1 = 1;
        m1++;
      }
    }
  }

  // when to stop incrementing
  if (y1 == y2 && m1 == m2 && d1 == d2) {
    break;
  }

  // break; // only for testing (to save without crashing)
}

console.log({ N });
