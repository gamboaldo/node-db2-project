const db = require("../../data/db-config");

const getAll = () => {
  // DO YOUR MAGIC
};

const getById = () => {
  // DO YOUR MAGIC
};

const create = () => {
  // DO YOUR MAGIC
};

const getVinNumber = (vin) => {
  return db("cars").where({ vin }).first();
};

module.exports = {
  getAll,
  getById,
  create,
  getVinNumber,
};
