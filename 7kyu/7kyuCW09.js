// This kata is the first of a sequence of four about "Squared Strings".
// You are given a string of n lines, each substring being n characters long: For example:

// s = "abcd\nefgh\nijkl\nmnop"
// Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
// vert_mirror(s) => "dcba\nhgfe\nlkji\nponm" 
// Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
//  hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"

// TASK:
// Write these two functions
// and
// high-order function oper(fct, s) where
// fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)



//My solution:
function vertMirror(str) {
    return str.split('\n')
      .map(line => line.split('').reverse().join(''))
      .join('\n')
}
function horMirror(str) {
    return str.split('\n')
      .reverse()
      .join('\n')
}
function oper(fct, s) {
    return fct(s)
}