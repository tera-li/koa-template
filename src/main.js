const app = require("./app/index");
const { APP_PORT, APP_URL } = require("./config/index");
app.listen(APP_PORT, () => {
  console.log(`server running to ${APP_URL}`);
});
