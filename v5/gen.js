const config = require("../config.js");
let list = "";
if (config.ENGLISH_LETTERS) list += "abcdefghijklmnopqrstuvwxyz";
if (config.ENGLISH_CAPITAL_LETTERS) list += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (config.RUSSIAN_LETTERS) list += "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
if (config.RUSSIAN_CAPITAL_LETTERS) list += "АБВГДЕЁЖЗЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
if (config.NUMBERS) list += "0123456789";
if (config.SYMBOLS) list += "!@#$%^&*()-_=+\"<>;:,./?\|`~[]{}'";

if (config.LENGTH == 0 || !config.LENGTH) return console.log("Choose length a password in config");

if (config.AMOUNT == 0 || !config.AMOUNT) return console.log("Choose amount of passwords in config");

if (
  !config.ENGLISH_LETTERS &&
  !config.ENGLISH_CAPITAL_LETTERS &&
  !config.RUSSIAN_LETTERS &&
  !config.RUSSIAN_CAPITAL_LETTERS &&
  !config.NUMBERS &&
  !config.SYMBOLS
) {
  return console.log("Choose something in config for generate password(s)");
};

for (let number = 0; number < config.AMOUNT; number++) {
  let result = '';

  for (let index = 0; index < config.LENGTH; ++index) {
    result += list.charAt(Math.floor(Math.random() * list.length));
  };

  console.log(result);
};