console.log("TRAIN AREA!");

// --------------------------------------------------------------------------------------------------------------------------------------
// D-TASK: 

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

const moment = require('moment');

class Shop {
    #non = 0;
    #lagmon = 0;
    #cola = 0;

    constructor(non, lagmon, cola) {
        this.#non = non;
        this.#lagmon = lagmon;
        this.#cola = cola;
    }

    qoldiq() {
        console.log(`Hozir ${moment().format('HH:mm')}da ${this.#non}ta non, ${this.#lagmon}ta lagmon va ${this.#cola}ta cola mavjud!`);
    }

    sotish(input, amount) {
        switch(input) {
            case 'non':
                if (this.#non >= amount) {
                    this.#non-=amount;
                    console.log(`${amount}ta ${input} sotildi!`);
                } else {
                    console.log(`Shopda ${input} yetarlicha emas!`);
                }
                break;
            case 'lagmon':
                if (this.#lagmon >= amount) {
                    this.#lagmon-=amount;
                    console.log(`${amount}ta ${input} sotildi!`);
                } else {
                    console.log(`Shopda ${input} yetarlicha emas!`);
                }
                break;
            case 'cola':
                if (this.#cola >= amount) {
                    this.#cola-=amount;
                    console.log(`${amount}ta ${input} sotildi!`);
                } else {
                    console.log(`Shopda ${input} yetarlicha emas!`);
                }
                break;
            default:
                console.log(`Shopda ${input} degan narsa yoq! Ma'lumotni togri kiriting!`);
                break;
        }
    }

    qabul(input, amount) {
        switch(input) {
            case 'non':
                this.#non+=amount;
                console.log(`${amount}ta ${input} qabul qilindi!`);
                break;
            case 'lagmon':
                this.#lagmon+=amount;
                console.log(`${amount}ta ${input} qabul qilindi!`);
                break;
            case 'cola':
                this.#cola+=amount;
                console.log(`${amount}ta ${input} qabul qilindi!`);
                break;
            default:
                console.log(`Shopda ${input} degan narsa yoq! Ma'lumotni togri kiriting!`);
                break;
        }
    }
    
}

const shop = new Shop(4, 5, 2);
shop.qoldiq();
shop.sotish('non', 3);
shop.qabul('cola', 4);
shop.qoldiq();


// --------------------------------------------------------------------------------------------------------------------------------------
// C-TASK: 

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// MANUAL CHECKING WITHOUT ANY ARRAY METHODS
/* const checkContent = (string1, string2) => {
    if (string1.length !== string2.length) {
        return false;
    }

    let count = 0;
    let notFound = 0;
    for (const character of string1) {              // check 1st string with 2nd string
        for (const character2 of string2) {
            if (character === character2) {
                count++;
            } else {
                notFound++;
                if (notFound >= string1.length) return false;
            }
        }
        notFound = 0;
    }
    count = 0;
    notFound = 0;

    for (const character of string2) {              // check 2nd string with 1st string
        for (const character2 of string1) {
            if (character === character2) {
                count++;
            } else {
                notFound++;
                if (notFound >= string2.length) return false;
            }
        }
        notFound = 0;
    }

    if (count >= string1.length && notFound < string1.length) {
        return true;
    } else {return false;}
    
}

console.log(checkContent("mitgroup", "gmtiprou"));

// FAST CHECKING WITH ARRAY METHODS
const checkContent2 = (string1, string2) => {
  return string1.split('').sort().join('') === string2.split('').sort().join('');
};

console.log(checkContent2("mitgroup", "gmtiprou")); 
*/


// --------------------------------------------------------------------------------------------------------------------------------------
// B-TASK: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.


// const countDigits = (string) => {
//     let count = 0;
//     for (const character of string) {
//         if (character >= 0 && character <= 9) {     // if (typeof character == 'number') won't work. Find out why?
//         count++;
//         }
//     }
//     return count;
// }

// console.log("Digits in string:", countDigits("ad2a54y79wet0sfgb9"));


// --------------------------------------------------------------------------------------------------------------------------------------
/* A-TASK

 Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
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

// ------------------------------------------------- END of TAKSKS -------------------------------------------------------------------------------------



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
