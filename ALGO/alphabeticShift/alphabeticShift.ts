export function alphabeticShift(inputString: string): string {
  const length = inputString.length

  let str = ""
  let newString = ""

  for (let i = 0; i < length; i++) {
    const chr = inputString.charCodeAt(i)
    const regex = /z/i
    if (regex.test(inputString[i])) {
      str = String.fromCharCode(chr - 25)
    } else {
      str = String.fromCharCode(chr + 1)
    }
    // const str = String.fromCodePoint(chr + 1)
    newString += str
  }

  return newString
}

console.log(alphabeticShift("crazy"))
console.log(alphabeticShift("CRAZY"))
console.log(alphabeticShift("cCrRaAzZyY"))
