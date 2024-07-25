const son1 = +prompt(`Birinchi son kiriting`);
const son2 = +prompt(`Ikkinchi son kiriting`);

const amal = +prompt(`
1. Qo'shish
2. Ayirish
3. Kopaytirish
4. Bolish
Tanlang (1, 2, 3, 4)`);

let natija;

if (amal === 1) {
    natija = son1 + son2;
    alert(`${son1} + ${son2} = ${natija}`);
} else if (amal === 2) {
    natija = son1 - son2;
    alert(`${son1} - ${son2} = ${natija}`);
} else if (amal === 3) {
    natija = son1 * son2;
    alert(`${son1} * ${son2} = ${natija}`);
} else if (amal === 4) {
    natija = son1 / son2;
    alert(`${son1} / ${son2} = ${natija}`);
} else {
    alert("Noto'g'ri tanlov!");
}