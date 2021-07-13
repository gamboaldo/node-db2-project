// STRETCH
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "123",
          make: "toyota",
          model: "cool",
          mileage: 1,
        },
        {
          vin: "1234",
          make: "ferrari",
          model: "cooler",
          mileage: 7,
        },
        { vin: "12345", make: "ford", model: "fine", mileage: 3 },
        {
          vin: "123456",
          make: "lamborghini",
          model: "coolest!",
          mileage: 10,
        },
      ]);
    });
};
