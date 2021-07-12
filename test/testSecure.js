const { sign, verify } = require("../secure");
const fs = require("fs");

(async () => {
  try {
    let token = await sign("hola");
    let decoded = await verify(token);
    //get private key without line breaks.
    let keyDirectory = "/Users/daniel/workspace/gil/security/secure/keys/id_rsa";
    const PRIVKEY = fs.readFileSync(keyDirectory, 'utf-8');

  } catch (e) {
    console.log(e);
  }
})();
