// prime or not
let num = 7;
let isPrime = true;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log('Prime');
} else {
  console.log('Not Prime');
}