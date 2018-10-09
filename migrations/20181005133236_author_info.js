
exports.up = function(knex, Promise) {
    return knex.schema.createTable('author_info',(author) => {
        author.increments('id')
        author.string('first')
        author.string('last')
        author.text('bio')
        author.string('image')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('author_info')
};
