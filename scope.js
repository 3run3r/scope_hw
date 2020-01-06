// Episode 1
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// predicted output: logs "The murderer is 'Miss Scarlet'". We are accessing values that are not outside the scope.

// Episode 2
// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// predicted output: error, const murderer can't be reassigned in the function changeMurderer.

// Episode 3
// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// predicted output: "the murderer is Mrs. Peacock", the function is returning the variable that was reinitialised in the block. "the murderer is Professor Plum" the function is returning the original variable because it was only reinitialised in the scope of the first funciton.

// // Episode 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);
//
// // predicted output: "the suspects are Miss Scarlet Professor Plum Colonel Mustard", the suspectThree variable was reinitialised in the scope of the function. "Suspect three is Mrs. Peacock" because the variable was only reinitialisedin the scope of the function.

// Episode 5
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// // predicted output: "the weapon is the revolver" the variable scenario is a const however its properties can be reassigned, which is what happens here.

// Episode 6
// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
//
// / // predicted output: "the murderer is Mrs. White" the murderer variable is reinitialised as a global variable twice, calling the function declareMurderer returns the last value that was assigned to murderer.

// // Episode 7
// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// / // predicted output: "the murderer is Mr. Green". murderer = "Mr.Green" is outside the scope of the other two functions plotTwist and unexpectedOutcome, therefore calling the function changeMurderer will just return Mr.Green as it is of a higher hierarchy.

// Episode 8
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// predicted output: "the weapon is Candle Stick" the properties of the scenario object are reassigned at the beginning of the function. Since the arguments passed match the conditions of both conditional statements, the murderer property and the weapon property are reassigned, whcih means that the weapon will be the last one that was assigned in the unexpectedOutcome function.


// Episode 9
// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// predicted output: "the murderer is professor Plum". The variable murderer  is reinitialised  but only in the if statement block. when the function declareMurderer is called, the variable accessed is the one that was declared in the global object.


// Own Episode

const scenario = {
  murderer: "Matteo",
  weapon: "knife",
  room: "living room"
};

const changeScenario = function () {

  const changeRoom = function(weapon){
    if (scenario.weapon === weapon) {
    scenario.room = "bathroom";}

    const changeMurderer = function(room) {
      if (scenario.room === room) {
      scenario.murderer = "Harrison";}

    }

    changeMurderer("bathroom");
    
  };

  changeRoom("knife");

};

changeScenario()

const verdict = `${scenario.murderer} killed the victim with a ${scenario.weapon} in the ${scenario.room}`
console.log(verdict);
