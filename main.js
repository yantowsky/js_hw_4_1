//HomeWork_4.2
let num;

do {
    num = +prompt("Введіть тризначне число:");
} while (num < 100 || num > 999 || isNaN(num));

const res = num / 111;
const arrNum = num.toString().split('');

if (Number.isInteger(res)) {
    console.log(`${num} - в цьому тризначному числі всі цифри однакові і це ${res}`);
} else if (arrNum[0] === arrNum[1] || arrNum[0] === arrNum[2]) {
    console.log(`${num} - в цьому тризначному числі дві цифри однакові і це ${arrNum[0]}`);
} else if (arrNum[1] === arrNum[2]) {
    console.log(`${num} - в цьому тризначному числі дві цифри однакові і це ${arrNum[1]}`);
} else {
    console.log(`${num} - в цьому тризначному числі немає однакових цифр`);
}