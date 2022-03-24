const router = require("express").Router();

module.exports = (app) => {
  router.get("/getAllUser", app.controllers.user.getAll);
  router.post("/addUser", app.controllers.user.addUser);
  router.post("/getById", app.controllers.user.getById);
  router.post("/userUpdate", app.controllers.user.userUpdate);
  router.post("/delete", app.controllers.user.remove);

  return router;
};
