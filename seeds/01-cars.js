
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {year: 2014, make: 'Honda',      model: 'Accord',  mileage: 20294, vin: "EUC7E3KW9SK334J9F", type: "manual", status: "clean"},
        {year: 2094, make: 'Nissan',     model: 'Altima',  mileage: 24294, vin: "288UIMNPNNOCUAEBE", type: "auto",   status: "salvage"},
        {year: 2005, make: 'Chrysler',   model: 'Aspen',   mileage: 24534, vin: "39H2NOANODNOLAJJN", type: "manual", status: "clean"},
        {year: 2015, make: 'Porsche',    model: 'Boxster', mileage: 23420, vin: "3IUUSJFNNOSONFL23", type: "auto",   status: "salvage"},
        {year: 2019, make: 'Ford',       model: 'Bronco',  mileage: 00243, vin: "887EUHHY373HJKSOS", type: "auto",   status: "clean"},
        {year: 2010, make: 'Saturn',     model: 'Aura',    mileage: 37298, vin: "228URJJDJJXNWJJWE", type: "auto",   status: "clean"},
        {year: 2018, make: 'Mitsubishi', model: 'Eclipse', mileage: 39900, vin: "373UJJKIW99I3NFIN", type: "manual", status: "clean"},
        {year: 2002, make: 'Ford',       model: 'Focus',   mileage: 32929, vin: "328989N9W8ENINCII", type: "auto",   status: "salvage"},
        {year: 2005, make: 'Acura',      model: 'Integra', mileage: 22199, vin: "398SKNP2PNNBUOQPK", type: "auto",   status: "clean"},

      ]);
    });
};
