// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {

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


  // a random char is chosen from the set

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

  // for each case that can occur, a random function is chosen

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

  // Begin building the password, starting with an empty string

  var buildPassword = ``

  for (; buildPassword.length < numOfChar;) {

    if (inclUpper && inclLower && inclNum && inclSpec) {
      var buildPassword = buildPassword + `${getCase1()}`
    }
    else if (inclUpper && inclLower && inclNum && !inclSpec) {
      var buildPassword = buildPassword + `${getCase2()}`
    }
    else if (inclUpper && inclLower && !inclNum && inclSpec) {
      var buildPassword = buildPassword + `${getCase3()}`
    }
    else if (inclUpper && !inclLower && inclNum && inclSpec) {
      var buildPassword = buildPassword + `${getCase4()}`
    }
    else if (!inclUpper && inclLower && inclNum && inclSpec) {
      var buildPassword = buildPassword + `${getCase5()}`
    }
    else if (inclUpper && inclLower && !inclNum && !inclSpec) {
      var buildPassword = buildPassword + `${getCase6()}`
    }
    else if (inclUpper && !inclLower && !inclNum && inclSpec) {
      var buildPassword = buildPassword + `${getCase7()}`
    }
    else if (!inclUpper && !inclLower && inclNum && inclSpec) {
      var buildPassword = buildPassword + `${getCase8()}`
    }
    if (!inclUpper && inclLower && inclNum && !inclSpec) {
      var buildPassword = buildPassword + `${getCase9()}`
    }
    else if (!inclUpper && inclLower && !inclNum && inclSpec) {
      var buildPassword = buildPassword + `${getCase10()}`
    }
    else if (inclUpper && !inclLower && inclNum && !inclSpec) {
      var buildPassword = buildPassword + `${getCase11()}`
    }
    else if (inclUpper && !inclLower && !inclNum && !inclSpec) {
      var buildPassword = buildPassword + `${genUpperChar()}`
    }
    else if (inclLower && !inclUpper && !inclNum && !inclSpec) {
      var buildPassword = buildPassword + `${genLowerChar()}`
    }
    else if (inclNum && !inclUpper && !inclLower && !inclSpec) {
      var buildPassword = buildPassword + `${genNumChar()}`
    }
    else if (inclSpec && !inclUpper && !inclLower && !inclNum) {
      var buildPassword = buildPassword + `${genSpecChar()}`
    }

  }
  console.log(buildPassword)

  let password = buildPassword

  return password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//The following code was written with the help of a TA. While it is by far better code, I wouldn't feel right turning it in as my own work despite my contributions to it. While my solution is inelegant, it works and I am proud of it.

// let charArray = []

  // function genRandom() {

  //   var buildPassword = ``

  //   for (let i = 0; i < numOfChar; i++) {
  //     let newChar = charArray[Math.floor(Math.random() * charArray.length)]
  //     buildPassword.concat(newChar)
  //   }
  //   console.log(buildPassword)
  //   alert(buildPassword)

  // }

  // function arrayConc() {

  //   if (inclUpper) {
  //     charArray = charArray.concat(upperChar)
  //   }
  //   if (inclLower) {
  //     charArray = charArray.concat(lowerChar)
  //   }
  //   if (inclNum) {
  //     charArray = charArray.concat(numChar)
  //   }
  //   if (inclSpec) {
  //     charArray = charArray.concat(specChar)
  //   }
  //   genRandom()
  // }



  // arrayConc()


  // const array1 = ['a', 'b', 'c'];
  // const array2 = ['d', 'e', 'f'];
  // const array3 = array1.concat(array2);

  // console.log(array3);
  // // Expected output: Array ["a", "b", "c", "d", "e", "f"]