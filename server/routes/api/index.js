const router = require("express").Router();

//Define APIs:
//router.use('/API_MOUNT_POINT, require('./YOUR_API.JS'));

//Sends 404 if API not found
router.use((req, res, next) => {
  res.status(404).send("API Not Found");
});

module.exports = router;
