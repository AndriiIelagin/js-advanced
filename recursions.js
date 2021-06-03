// Factorial: 5! = 5 * 4 * 3 * 2 * 1 = 120

function fac(num) {
  // Emergency termination condition
  if(num < 0) return
  // Basic check to finish recursion
  if(num === 1) return num
  // Recursion
  return num * fac(num - 1)
}

console.log(fac(5))