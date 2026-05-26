const server = require("express");
const router = server.Router();
const {
  getbook,
  postbook,
  upadatebook,
  deletebook,
} = require("../controller/appcontroller");
const { model } = require("mongoose");

router.get("/books", getbook);
router.post("/addbooks", postbook);
router.put("/upbook/:id", upadatebook);
router.delete("/delbook/:id", deletebook);

module.exports = router;
