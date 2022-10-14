let weeklyExpenses = 0;
let monthlyExpenses = 0;
let annualExpenses = 0;

/* while loops */
// weekly
let i = 1;
let weekly = parseFloat(window.prompt(weeklyExpenseQuestions[0]));
while (i < weeklyExpenseQuestions.length) {
  weekly = parseFloat(window.prompt(weeklyExpenseQuestions[i]));
  i++;
}
weeklyExpenses += weekly;

// monthly
let a = 1;
let monthly = parseFloat(window.prompt(monthlyExpenseQuestions[0]));
while (a < monthlyExpenseQuestions.length) {
  monthly = parseFloat(window.prompt(monthlyExpenseQuestions[a]));
  a++;
}
monthlyExpenses += monthly;

// annual
let x = 1;
let annual = parseFloat(window.prompt(annualExpenseQuestions[0]));
while (x < annualExpenseQuestions.length) {
  annual = parseFloat(window.prompt(annualExpenseQuestions[x]));
  x++;
}
annualExpenses += annual;

/* for loops */
// for (let i = 0; i < weeklyExpenseQuestions.length; i++) {
//   let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]));
//   weeklyExpenses += answer;
// }

// for (let i = 0; i < monthlyExpenseQuestions.length; i++) {
//   let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]));
//   monthlyExpenses += answer;
// }
// for (let i = 0; i < annualExpenseQuestions.length; i++) {
//   let answer = parseFloat(window.prompt(annualExpenseQuestions[i]));
//   annualExpenses += answer;
// }

// console.log(weeklyExpenses);
// console.log(monthlyExpenses);
// console.log(annualExpenses);
