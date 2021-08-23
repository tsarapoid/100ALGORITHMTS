//import { arrayChange } from "../arrayChange/arrayChange"

export function addBorder(picture: string[]): string[] {
  const widthOfWall = picture[0].length + 2
  const lengthOfWall = picture.length + 2

  const wall = "*".repeat(widthOfWall)
  picture.unshift(wall)
  picture.push(wall)

  for (let i = 1; i < lengthOfWall - 1; i++) {
    picture[i] = "*" + picture[i] + "*"
  }

  return picture
}

console.log(addBorder(["abc", "ded"]))
console.log(addBorder(["abrakabc", "abradded", "abradred"]))
