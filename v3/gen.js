let config = require("../config.json");
var list = "";
if (config.EnglishLetters) list += "abcdefghijklmnopqrstuvwxyz";
if (config.EnglishCapitalLetters) list += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (config.RussianLetters) list += "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
if (config.RussianCapitalLetters) list += "АБВГДЕЁЖЗЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
if (config.numbers) list += "0123456789";

if(config.lenght==0 || !config.lenght) return console.log("Choose length a password in config");

if (
  !config.EnglishLetters &&
  !config.EnglishCapitalLetters &&
  !config.RussianLetters &&
  !config.RussianCapitalLetters &&
  !config.numbers
) {
  console.log("Choose something in config for generate password");
  return console.log("note: Special symbols are supported in the v4");
}

result = '';
for (var index = 0, n = list.length; index < config.lenght; ++index) {
  result += list.charAt(Math.floor(Math.random() * n));
};

return console.log(result);