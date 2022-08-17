let year = prompt("В каком году вы родились ?");

let age = 2022 - year;

if (age < 99) {
  alert(`Вам ${age} лет!`);
} else if (age > 99) {
  alert(`Вам пора на покой`);
}
