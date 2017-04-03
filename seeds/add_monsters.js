
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('monsters').del()
    .then(function () {
      // Inserts seed entries
      return knex('monsters').insert([
        {monsters_name: 'Frankie'},
        {monsters_name: 'Joel'},
        {monsters_name: 'Mike'},
        {monsters_name: 'Cookie'}
      ]);
    });
};
