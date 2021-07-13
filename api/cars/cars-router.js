// DO YOUR MAGIC
const router = require("express").Router();
const Cars = require("./cars-model");

const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require("./cars-middleware");

router.use((err, req, res) => {
  // eslint-disable-line
  // CALL next(err) IF THE PROMISE REJECTS INSIDE YOUR ENDPOINTS
  res.status(err.status || 500).json({
    message: "something went wrong inside the cars router",
    errMessage: err.message,
  });
});

module.exports = router;
