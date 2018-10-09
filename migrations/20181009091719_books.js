
exports.up = function(knex, Promise) {
    return knex.schema.createTable('book_info',(books)=>{
        books.increments('id')
        books.string('title')
        books.string('genre')
        books.text('description')
        books.string('cover')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('book_info')
};
