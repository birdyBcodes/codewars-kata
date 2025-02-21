// We will study some transformations of this square of strings.
// This kata is the first of a sequence of four about "Squared Strings".
// You are given a string of n lines, each substring being n characters long
// Vertical mirror
// Horizontal mirror
// or printed
// Task:
// Write these two functions
// and
// high-order function oper(fct, s) where:
// fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

//My solution:
function vertMirror(strng) {
    return strng
      .split('\n')
      .map(part => part.split('').reverse().join(''))
      .join('\n');
  }
  function horMirror(strng) {
    return strng
      .split('\n')
      .reverse()
      .join('\n');
  }
  function oper(fct, s) {
      return fct(s);
  }



