const config = require("../config.js");
let list = "abcdefghijklmnopqrstuvwxyz";
if (config.ENGLISH_CAPITAL_LETTERS) list += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (config.NUMBERS) list += "0123456789";

if (config.LENGTH == 0 || !config.LENGTH) return console.log("Choose length a password in config");

result = '';
for (var index = 0, n = list.length; index < config.LENGTH; ++index) {
  result += list.charAt(Math.floor(Math.random() * n));
};

return console.log(result);