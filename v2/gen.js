let config = require("../config.json");
var list = "abcdefghijklmnopqrstuvwxyz";
if(config.EnglishCapitalLetters) list+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if(config.numbers) list+="0123456789";

if(config.lenght==0 || !config.lenght) return console.log("Choose length a password in config");

result = '';
for (var index = 0, n = list.length; index < config.lenght; ++index) {
  result += list.charAt(Math.floor(Math.random() * n));
};

return console.log(result);