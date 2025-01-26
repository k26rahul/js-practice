// dateStr1 is like 'YYYY-MM-DD', Jan is 01
function getDaysBetween(dateStr1, dateStr2) {
  let date1 = new Date(dateStr1);
  let date2 = new Date(dateStr2);
  return (date2 - date1) / 1000 / 86400;
}

function isValidDates(startingDate, endingDate) {
  let date1 = new Date(startingDate);
  let date2 = new Date(endingDate);
  let ans = date1 != 'Invalid Date' && date2 != 'Invalid Date';
  return ans;
}

/*
 * calculateSimpleInterest calculates and returns the simple interest
 * (floor value) for a fixed deposit. Formula used is,

 * calculateSimpleInterest calculates and returns the simple interest
 * for a fixed deposit. Formula used is,
 * Simple Interest: P X R X T / 100
 *   where:
 *   P = Principal
 *   I = Daily interest rate
 *   N = Number of days
 *
 *  In case of any input error (wrong date format, alphabets in daily interest etc.), return -1
 *
 * @param {number} principal  - Principal amount
 * @param {number} dailyInterest  - daily interest rate
 * @param {string} startingDate  - Starting date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @param {string} endingDate  - Ending date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @return {number} interest
*/

function calculateSimpleInterest(principal, dailyInterest, startingDate, endingDate) {
  if (!isValidDates(startingDate, endingDate)) {
    return -1;
  }

  // Add your code here
  let interest = (principal * dailyInterest * getDaysBetween(startingDate, endingDate)) / 100;

  return Math.floor(interest);
}

/*
 * calculateCompoundInterest calculates and returns the compound interest
 * (floor value) for a fixed deposit. Formula used is,
 *   Compound Interest=P[(1+I/100)^N - 1]
 *   where:
 *   P = Principal
 *   I = Daily interest rate
 *   N = Number of days
 *
 *  In case of any input error (wrong date format, alphabets in daily interest etc.), return -1
 *
 * @param {number} principal  - Principal amount
 * @param {number} dailyInterest  - daily interest rate
 * @param {string} startingDate  - Starting date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @param {string} endingDate  - Ending date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @return {number} interest
 */

function calculateCompoundInterest(principal, dailyInterest, startingDate, endingDate) {
  if (!isValidDates(startingDate, endingDate)) {
    return -1;
  }

  let interest =
    principal * ((1 + dailyInterest / 100) ** getDaysBetween(startingDate, endingDate) - 1);

  return Math.floor(interest);
}

/*
 * extraAmountPercentage calculates and returns the extra amount percentage borrower will have to pay in case of
 * compound interest (floor value) in comparison to the simple interest for a fixed deposit.

 *  In case of any input error (wrong date format, alphabets in daily interest etc.), return -1
 *
 * @param {number} principal  - Principal amount
 * @param {number} dailyInterest  - Daily interest rate.
 * @param {string} startingDate  - Starting date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @param {string} endingDate  - Ending date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @return {number} percentage
*/

function extraAmountPercentage(principal, dailyInterest, startingDate, endingDate) {
  if (!isValidDates(startingDate, endingDate)) {
    return -1;
  }

  // Add your code here
  let si = calculateSimpleInterest(principal, dailyInterest, startingDate, endingDate);
  let ci = calculateCompoundInterest(principal, dailyInterest, startingDate, endingDate);
  let diff = ci - si;
  let percentage = (diff / si) * 100;

  return Math.floor(percentage);
}
