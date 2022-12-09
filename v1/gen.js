let config = require("../config.json");
var list = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

if(config.lenght==0 || !config.lenght) return console.log("Choose length a password in config");

res = '';
for (var i = 0, n = list.length; i < config.lenght; ++i) {
  res += list.charAt(Math.floor(Math.random() * n));
};

return console.log(res);