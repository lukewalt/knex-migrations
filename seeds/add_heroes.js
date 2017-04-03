
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('heroes').del()
    .then(function () {
      // Inserts seed entries
      return knex('heroes').insert([
        {hero_name: 'Joel'},
        {hero_name: 'Pirlo'},
        {hero_name: 'Westley'}
      ]);
    });
};
