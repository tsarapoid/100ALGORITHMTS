export function adjacentElementsProduct(inputArray: number[]): number {
  const outputArray: number[] = []
  inputArray.reduce((prev, curr) => {
    outputArray.push(prev * curr)
    return curr
  })
  outputArray.sort()
  return outputArray[outputArray.length - 1]
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))
console.log(adjacentElementsProduct([-3, -6, -9, -5, -7, -3]))
console.log(adjacentElementsProduct([3, 6, 2, 5, 7, 3]))
