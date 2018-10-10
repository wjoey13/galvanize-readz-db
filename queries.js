const databaseConnection = require('./knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(databaseConnection);


 

module.exports = {
    allAuthors(){
        return knex.select().from('author_info');
    },
    allBooks(){
        return knex.select().from('book_info');
    },
    indiBooks(id){
        return knex.select('*').from('book_info').where('id',id);
    },
    indiAuthors(id){
        return knex.select().from('author_info').where('id',id);
    },
    createAuthor(newAuthor){
        return knex('author_info').insert(newAuthor).returning('*');
    },
    updateAuthor(author, id){
        return knex('author_info').update(author).where('id', id);
    },
    deleteAuthor(id) {
        return knex('author_info').where('id', id).delete();
    },
    createBook(newBook){
        return knex('book_info').insert(newBook).returning('*');
    },
    updateBook(books, id){
        return knex('book_info').update(books).where('id', id);
    },
    deleteBook(id) {
        return knex('book_info').where('id', id).delete();
    },
    getEverything() {return knex('author_info')
    .from('author_info')
    .orderBy('author_info.id', 'asc')
    .fullOuterJoin('novelist', 'author_info.id', 'novelist.authorID') 
    .fullOuterJoin('book_info', 'book_info.id', 'novelist.bookID') 
    }
}