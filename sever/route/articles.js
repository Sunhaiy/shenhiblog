const connection = require('../sql')

function getArticles(params) {
    const query = `SELECT * FROM  WHERE id = ${params.id}`
}