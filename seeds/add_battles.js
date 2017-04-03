
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('battles').del()
    .then(function () {
      // Inserts seed entries
      return knex('battles').insert([
        {location: 'Kings Landing', monster_id: 12, hero_id: 7},
        {location: 'Winterfell', monster_id: 11, hero_id: 6},
        {location: 'Hoth', monster_id: 10, hero_id: 5}
      ]);
    });
};
