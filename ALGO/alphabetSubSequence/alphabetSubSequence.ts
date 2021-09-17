export function alphabetSubsequence(s: string): boolean {
  let count = 0

  const sequence = s.split("").sort()
  console.log(sequence)

  sequence.reduce((prev, curr) => {
    if (prev === curr) ++count
    return curr
  })
  return count < 1
}

console.log(alphabetSubsequence("zab"))
console.log(alphabetSubsequence("effg"))
console.log(alphabetSubsequence("cdce"))
console.log(alphabetSubsequence("ace"))
console.log(alphabetSubsequence("bxz"))
