const config = require("../config.js");
let list = "";
if (config.ENGLISH_LETTERS) list += "abcdefghijklmnopqrstuvwxyz";
if (config.ENGLISH_CAPITAL_LETTERS) list += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (config.RUSSIAN_LETTERS) list += "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
if (config.RUSSIAN_CAPITAL_LETTERS) list += "АБВГДЕЁЖЗЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
if (config.NUMBERS) list += "0123456789";

if (config.LENGTH == 0 || !config.LENGTH) return console.log("Choose length a password in config");

if (
  !config.ENGLISH_LETTERS &&
  !config.ENGLISH_CAPITAL_LETTERS &&
  !config.RUSSIAN_LETTERS &&
  !config.RUSSIAN_CAPITAL_LETTERS &&
  !config.NUMBERS
) {
  console.log("Choose something in config for generate password");
  return console.log("note: Special symbols are supported in the v4");
};

result = '';
for (var index = 0, n = list.length; index < config.LENGTH; ++index) {
  result += list.charAt(Math.floor(Math.random() * n));
};

return console.log(result);