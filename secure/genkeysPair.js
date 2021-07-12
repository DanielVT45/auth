const crypto = require("crypto");
const fs = require("fs");

async function genKeyPair() {
  let { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
  });

  //write: public key.
  fs.writeFileSync(__dirname + "/keys/id_rsa_pub.pem", publicKey);
  console.log("se escribio la llave publica");

  //write: private key.
  fs.writeFileSync(__dirname + "/keys/id_rsa_priv.pem", privateKey);
  console.log("se escribio la llave privada");
}

(async () => {
  try {
    await genKeyPair();
  } catch (e) {
    console.log(e);
  }
})();
