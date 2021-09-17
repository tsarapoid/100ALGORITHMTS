export function almostIncreasingSequence(sequence: number[]): boolean {
  let count = 0

  sequence.reduce((prev, curr, index, array) => {
    if (prev >= curr) {
      ++count
      if (prev >= array[index + 1]) ++count
    }
    return curr
  })
  return count <= 1
}

console.log(almostIncreasingSequence([1, 2, 1, 4, 5]))
console.log(almostIncreasingSequence([6, 8, 9, 2, 5]))

console.log(almostIncreasingSequence([1, 1, 3, 1, 1, 1]))
console.log(almostIncreasingSequence([1, 2, 3, 2, 5]))

console.log(almostIncreasingSequence([1, 1, 3, 2, 1]))
console.log(almostIncreasingSequence([1, 3, 2]))

console.log(almostIncreasingSequence([1, 2, 3, 4, 5, 2]))
console.log(almostIncreasingSequence([1, 3, 2, 4, 5, 2]))
