// deklarálás - majd lesz egy ilyen változónk, létrehozzuk
// inicializáció - kezdő értékadás

// hoisting - hatókörön belül akárhol deklarálható a változó, a hoisting miatt olyan mintha a hatókör tetején jött volna létre.

let valt1 = 12; // globális változó
var valt2 = 24; // globális változó - adott fájlon belül látszik

fuggvenyem(valt1, valt2);
function fuggvenyem(valt1, valt2) {
  valt1 *= 2; // 24
  console.log(valt1); // 24
  console.log(valt2); // 24
  let valt3 = 23; // lokális változó
  var valt4 = 26; // lokális változó - adott függvényen belül látszik
}
console.log(valt1, valt2); // 12

fuggvenyem2();
function fuggvenyem2() {
  console.log(b); // undefined b - tudja, hogy van, de az értékét nem.
  // console.log(a); // hibaüzenetet kapunk ha inicializálás előtt használjuk
  let a = 2;
  var b = 3;
  // let a = 23; // nem megengedett
  var b = 12; // megengedett
  for (let index = 0; index < 4; index++) {
    let a = 4; // let hatóköre a {}. (Itt pl a for ciklus)
    var b = 5; // var hatóköre a függvény.
    console.log(a, b); // 4, 5
  }
  //console.log(index); // let index - a let miatt csak a cikluson belül él. Azon kívül nincs értéke.
  //console.log(index); // var index - a var miatt a cikluson kívül is él. 4 lesz az értéke itt.
  console.log(a, b); // 2, 5
}

//lista elé mindig const - ne lehessen neki új memória címet adni
const lista = [1, 2, 3, 4];
//lista=[5,6,7] Ez így nem fog működni
lista[0] = 1234; // működik
lista.slice(0, 1); // elem kitörlése
(lista, push(23)); // hozzáadás

function fuggvenyem3(lista2) {
  lista2.push(111);
  console.log(lista2);
  let lista4 = ["a", "b", "c", "d"];
  console.log(lista4);
}
//mindkettő kiírásba bekerül a 111 - lista az összetett adatszerkezet, memória cím és nem érték szerint történik a felhasználása, például paraméter átadásnál.
fuggvenyem3(lista);
console.log(lista);
//console.log(lista4); - not defined let miatt

const obj = {
  nev: "Anna",
  kor: "21",
};
