// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// define charset arrays
let lowerChar = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`]
let upperChar = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`]
let numChar = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`]
let specChar = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`]

// request params



let numOfChar = prompt(`How many characters would you like, friend? (Between 8 - 128 preferably)`)

if (numOfChar < 8 || numOfChar > 128) {
  alert(`No can do, you read the rules, try again`)
}

let inclUpper = confirm(`Now, could I interest you in Uppercase Letters?`)
let inclLower = confirm(`How about Lowercase Letters?`)
let inclNum = confirm(`Are you a fan of Numbers in your passwords?`)
let inclSpec = confirm(`And how about those Special Characters?`)

if (!inclUpper && !inclLower && !inclNum && !inclSpec) {
  alert(`Well, what do you want then?`)
}

console.log(numOfChar)
console.log(inclUpper)
console.log(inclLower)
console.log(inclNum)
console.log(inclSpec)





// for each requested char, a random compatible array is chosen, and a random char from that array is selected, and then added to the password.

function genUpperChar() {
  let randomUpperChar = upperChar[Math.floor(Math.random() * upperChar.length)];
  return randomUpperChar
}

function genLowerChar() {
  let randomLowerChar = lowerChar[Math.floor(Math.random() * lowerChar.length)];
  return randomLowerChar
}

function genNumChar() {
  let randomNumChar = numChar[Math.floor(Math.random() * numChar.length)];
  return randomNumChar
}

function genSpecChar() {
  let randomSpecChar = specChar[Math.floor(Math.random() * specChar.length)];
  return randomSpecChar
}

function getCase1() {
  let funcArray = [genUpperChar(), genLowerChar(), genNumChar(), genSpecChar()]
  let i = Math.floor(Math.random() * funcArray.length)
  return funcArray[i]
}

function getCase2() {
  let funcArray = [genUpperChar(), genLowerChar(), genNumChar()]
  let i = Math.floor(Math.random() * funcArray.length)
  return funcArray[i]
}

function getCase3() {
  let funcArray = [genUpperChar(), genLowerChar(), genSpecChar()]
  let i = Math.floor(Math.random() * funcArray.length)
  return funcArray[i]
}

function getCase4() {
  let funcArray = [genUpperChar(), genNumChar(), genSpecChar()]
  let i = Math.floor(Math.random() * funcArray.length)
  return funcArray[i]
}

function getCase5() {
  let funcArray = [genLowerChar(), genNumChar(), genSpecChar()]
  let i = Math.floor(Math.random() * funcArray.length)
  return funcArray[i]
}

function getCase6() {
  let funcArray = [genUpperChar(), genLowerChar()]
  let i = Math.floor(Math.random() * funcArray.length)
  return funcArray[i]
}

function getCase7() {
  let funcArray = [genUpperChar(), genSpecChar()]
  let i = Math.floor(Math.random() * funcArray.length)
  return funcArray[i]
}

function getCase8() {
  let funcArray = [genNumChar(), genSpecChar()]
  let i = Math.floor(Math.random() * funcArray.length)
  return funcArray[i]
}

function getCase9() {
  let funcArray = [genLowerChar(), genNumChar()]
  let i = Math.floor(Math.random() * funcArray.length)
  return funcArray[i]
}

function getCase10() {
  let funcArray = [genLowerChar(), genSpecChar()]
  let i = Math.floor(Math.random() * funcArray.length)
  return funcArray[i]
}

function getCase11() {
  let funcArray = [genUpperChar(), genNumChar(),]
  let i = Math.floor(Math.random() * funcArray.length)
  return funcArray[i]
}

var buildPassword = ``


if (inclUpper && inclLower && inclNum && inclSpec) {
  var buildPassword = buildPassword + `${getCase1()}`
}
else if (inclUpper && inclLower && inclNum && !inclSpec) {
  var buildPassword = buildPassword + `${getCase2()}`
}
if (inclUpper && inclLower && !inclNum && inclSpec) {
  var buildPassword = buildPassword + `${getCase3()}`
}
if (inclUpper && !inclLower && inclNum && inclSpec) {
  var buildPassword = buildPassword + `${getCase4()}`
}
if (!inclUpper && inclLower && inclNum && inclSpec) {
  var buildPassword = buildPassword + `${getCase5()}`
}
if (inclUpper && inclLower && !inclNum && !inclSpec) {
  var buildPassword = buildPassword + `${getCase6()}`
}
if (inclUpper && !inclLower && !inclNum && inclSpec) {
  var buildPassword = buildPassword + `${getCase7()}`
}
if (!inclUpper && !inclLower && inclNum && inclSpec) {
  var buildPassword = buildPassword + `${getCase8()}`
}
if (!inclUpper && inclLower && inclNum && !inclSpec) {
  var buildPassword = buildPassword + `${getCase9()}`
}
if (!inclUpper && inclLower && !inclNum && inclSpec) {
  var buildPassword = buildPassword + `${getCase10()}`
}
if (inclUpper && !inclLower && inclNum && !inclSpec) {
  var buildPassword = buildPassword + `${getCase11()}`
}
if (inclUpper && !inclLower, !inclNum, !inclSpec) {
  var buildPassword = buildPassword + `${genUpperChar()}`
}
if (inclLower && !inclUpper, !inclNum, !inclSpec) {
  var buildPassword = buildPassword + `${genLowerChar()}`
}
if (inclNum && !inclUpper, !inclLower, !inclSpec) {
  var buildPassword = buildPassword + `${genNumChar()}`
}
if (inclSpec && !inclUpper, !inclLower, !inclNum) {
  var buildPassword = buildPassword + `${genSpecChar()}`
}

console.log(buildPassword)



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
