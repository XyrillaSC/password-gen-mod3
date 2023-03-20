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


function requestParams() {

  let numOfChar = prompt(`How many characters would you like, friend? (Between 8 - 128 preferably)`)

  if (numOfChar < 8 || numOfChar > 128) {
    alert(`No can do, you read the rules, try again`)
    return
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







}
requestParams()

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



if (inclUpper && !inclLower, !inclNum, !inclSpec) {
  let buildPassword = buildPassword + `${genUpperChar()}`
}

if (inclLower && !inclUpper, !inclNum, !inclSpec) {
 let buildPassword = buildPassword + `${genLowerChar()}`
}

if (inclNum && !inclUpper, !inclLower, !inclSpec) {

}

if (inclSpec && !inclUpper, !inclLower, !inclNum) {

}


let buildPassword = ``


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
