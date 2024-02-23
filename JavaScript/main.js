let num = parseInt(prompt("Enter a number:"));
function comput(num) {

  let result = 0;
for (let p = 0; p <= num; p++) {
  result += p;
}
 document.write(`<h2 class="sum">The sum of ${num} numbers is ${result}</h2>`)
  let sum = 0;
  for (let j = 1; j < num; j++) {
    if (num % j === 0) {
      sum += j;
    }
  }
  if (sum === num) {
    document.write(`<h2 class="perfect">${num} is perfect number</h2>`);
  } else {
    document.write(`<h2 class="perfect">${num} is not perfect number</h2>`);
  }

  let y = 0
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      y++
    }
  }
  if (y === 2) {
    document.write(`<h2 class="prime">${num} is Prime</h2>`)
  
  } else {
    document.write(`<h2 class="prime">${num} is not Prime</h2>`)
  }
}
comput(num)
