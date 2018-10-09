
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('novelist').del()
    .then(function () {
      // Inserts seed entries
      return knex('novelist').insert([
        {
          authorID:1,
          bookID:1
        },
        {
          authorID:2,
          bookID:1
        },
        {
          authorID:3,
          bookID:1
        },
        {
          authorID:4,
          bookID:2
        },
        {
          authorID:5,
          bookID:3
        },
        {
          authorID:6,
          bookID:4
        },
        {
          authorID:6,
          bookID:5
        },
        {
          authorID:6,
          bookID:6
        },
        
        
      ]);
    });
};
