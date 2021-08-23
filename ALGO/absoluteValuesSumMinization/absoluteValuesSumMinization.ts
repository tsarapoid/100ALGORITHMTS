export function absoluteValuesSumMinimization(a: number[]): number {
  const isEven = a.length % 2 === 0

  return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)]
}

console.log(absoluteValuesSumMinimization([2, 4, 7]))
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]))
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]))
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]))

console.log(
  absoluteValuesSumMinimization([
    -10, -10, -10, -10, -10, -9, -9, -9, -8, -8, -7, -6, -5, -4, -3, -2, -1, 0,
    0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
    39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ])
)
