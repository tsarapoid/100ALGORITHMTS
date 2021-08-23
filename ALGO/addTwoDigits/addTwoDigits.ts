export function addTwoDigits(number: number | string): number {
  const string = number.toString()
  const sum = +string[0] + +string[1]
  return Number(sum)
}

console.log(addTwoDigits(29))
console.log(addTwoDigits(12))
console.log(addTwoDigits("99"))
