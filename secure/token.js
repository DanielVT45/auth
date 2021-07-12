const jwt = require("jsonwebtoken");
const fs = require("fs");
const crypto = require("crypto");

//Create objects:
const createSign = crypto.createSign("RSA-SHA256");
const verifySign = crypto.createVerify("RSA-SHA256");

const PUB_KEY = fs.readFileSync(__dirname + "/keys/id_rsa_pub.pem", "utf-8");
const PRIV_KEY = fs.readFileSync(__dirname + "/keys/id_rsa_priv.pem", "utf-8");

async function sign() {
  let payload = {
    sub: 123,
    name: "daniel valdez",
    email: "daniel@gamecore.com",
    password: 1234,
    admin: true,
    iat: 1626039165,
  };
  return jwt.sign(payload, "secret");
}

async function verify(token) {
  return jwt.verify(token, "secret");
}

(async () => {
  try {
    let token = await sign();
    console.log(token);
    (await verify(token)) ?  console.log("Token valido") : console.log("El token no es valido");
  } catch (e) {
    console.log(e.name + ": " + e.message);
  }
})();
