const jwt = require("jsonwebtoken");
const { privKey } = require("../config.js");

function sign(payload) {
  return jwt.sign({ password: "hola mundo" }, privKey);
}

function verify(token) {
  return jwt.verify(token, privKey, (err, decoded) => {
    if (err) throw err;
    return decoded;
  });
}

module.exports = {
  sign,
  verify
};
