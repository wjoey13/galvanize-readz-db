const databaseConnection = require('./knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(databaseConnection);


 

module.exports = {
    allAuthors(){
        return knex.select().from('author_info');
    },
    indiBooks(id){
        return knex.select('*').from('book_info').where('id',id);
    },
    indiAuthors(id){
        return knex.select().from('author_info').where('first',id);
    },
    createAuthor(){
        return knex('author_info').insert().returning('*');
    },
    updateBooks(){
        return knex('book_info').insert('book_info').returning('*');
    }
}