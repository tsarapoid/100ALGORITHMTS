export function allLongestStrings(inputArray: string[]): string[] {
  let longestLength = 0

  inputArray.forEach((element) => {
    if (element.length > longestLength) longestLength = element.length
    // longestLength = element.length > longestLength ? element.length : longestLength
  })

  const newArray = inputArray.filter(
    (element) => element.length === longestLength
  )

  return newArray
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]))
