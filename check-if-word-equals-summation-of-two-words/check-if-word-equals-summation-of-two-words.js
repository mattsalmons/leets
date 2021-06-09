var isSumEqual = function (firstWord, secondWord, targetWord) {
  const map = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
  }
  const first = parseInt(
    firstWord
      .split('')
      .map((char) => map[char])
      .join('')
  )
  const second = parseInt(
    secondWord
      .split('')
      .map((char) => map[char])
      .join('')
  )
  const target = parseInt(
    targetWord
      .split('')
      .map((char) => map[char])
      .join('')
  )
  return target == first + second
}