console.log("TRAIN AREA!");
// console.log("Jack Ma maslahatlari");
// const list = [
//     "yahshi talaba buling", // 0-20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi" // 60
// ];

// --------------------- CALLBACK FUNCTION --------------------- //
//  function giveMeAdvice(a, callback) {
//     if (typeof a !== 'number') callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(() => {                    // Unlike async functions, callback function will continously print the data
//             callback(null, list[5]);
//         }, 1000);
//         // setTimeout(function() {
//         //     callback(null, list[5]);
//         // }, 5000);
//     }
// }
    
// giveMeAdvice(65, (err, data) => {
//     if (err) console.log('ERROR', err);
//     else { 
//         console.log('Advice:', data);
//     }
// }); 

// ------------------- ASYNCHRONOUS FUNCTION ------------------- //
// async function giveMeAdvice(a) {            // Asynchronous function definition
//     if (typeof a !== 'number') throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         // return list[5];
//         // setTimeout(function() {
//         //     return list[5];
//         // }, 5000);

//         // We can't use setTimeout() inside async function directly so we use it with Promise()
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {                           // If we use serInterval(funct, time)
//             resolve(list[5]);                            // which loops the logic, async function
//         }, 5000);                                        // will just run it once and stop(wait).
//         });
//     }
// }

// console.log('passed here 0');

// -------------------------- Call via then() and catch() METHODS !!! these are METHODS!!! --------------------------
// giveMeAdvice(25)
//     .then((data) => {
//         console.log('Advice:', data);
//     })
//     .catch((err) => {
//         console.log('ERROR', err);
//     });

// *************************************************************************************************************************
// ***---------- Using asynchronous function with ASYNC/AWAIT with try {} and catch(err){} operators in call part too ----------***
// *************************************************************************************************************************

// async function run() {
//   try {
//     let answer = await giveMeAdvice(25);
//     console.log('Advice:', answer);
//     answer = await giveMeAdvice(70);
//     console.log('Advice:', answer);
//     answer = await giveMeAdvice("41");
//     console.log('Advice:', answer);
//     answer = await giveMeAdvice(41);
//     console.log('Advice:', answer);
//   } catch (err) {
//     console.log("Error:", err);
//   }
// }

// run();

// console.log('passed here 1'); 









// A-TASK

/* Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.

masalani yechimi: */

// const countLetter = (letter, string) => {
//     let count = 0;
//     for (const character of string) {
//         if (character === letter) {
//         count++;
//         }
//     }
//     return count;
// }

// console.log("Letters in string:", countLetter("a", "andrew (abulfayz)"));


// // Additional practice

// const countLetterInArray = (letter, array) => {
//     let countArr = 0;
//     for (const ele of array) {
//         for (const character of ele) {
//             if (character === letter) {
//                 countArr++;
//             }
//         }
//     }
//     return countArr;
// }

// const arr = ["andrew", "abulfayz", "async", "fullstack"];
// console.log("Letters in Array:", countLetterInArray("a", arr));



// NOTES from zoom lesson
// DEFINE
// function qoldiqliBolish(a, b, callback) {
//   if (b === 0) {
//     callback("Mahraj nolga teng bololmaydi", null, null);
//   } else {
//     callback(null, a % b, a / b);
//   }
// }

// // CALL
// qoldiqliBolish(10, 3, (err, data, data2) => {
//   if (err) console.log("Error:", err);
//   else {
//     console.log("data:", data, "\ndata2:", data2);
//   }
// });






// B-TASK: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.


const countDigits = (string) => {
    let count = 0;
    for (const character of string) {
        if (character >= 0 && character <= 9) {     // if (typeof character == 'number') won't work. Find out why?
        count++;
        }
    }
    return count;
}

console.log("Digits in string:", countDigits("ad2a54y79wet0sfgb9"));
