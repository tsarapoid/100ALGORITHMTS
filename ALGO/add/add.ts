export function add(param1: number, param2: number): number {
  return param1 + param2
}

console.log(add(1, 2))
console.log(add(3, 2))

export function add2(...params: number[]): number {
  const reducer = (a: number, b: number): number => a + b
  return params.reduce(reducer)
}

console.log(add2(1, 2, 3, 4, 5))
console.log(add2(2, 3))
