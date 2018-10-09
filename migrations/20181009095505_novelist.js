
exports.up = function(knex, Promise) {
    return knex.schema.createTable('novelist',(list) => {
        list.integer('authorID').unsigned();
        list.foreign('authorID').references('author_info.id')
        list.integer('bookID').unsigned();
        list.foreign('bookID').references('book_info.id')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('novelist');
};
