const app = require("./server.js");

app.listen(3000, (err) => {
  if (err) throw err;
  console.log("server listen on port: " + 3000);
});
