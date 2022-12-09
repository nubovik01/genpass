let config = require("../config.json");
var list = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

res = '';
for (var i = 0, n = list.length; i < config.lenght; ++i) {
  res += list.charAt(Math.floor(Math.random() * n));
};

return console.log(res);