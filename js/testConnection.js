const connection = require('../database/connection.js');

connection.query('SELECT 1 + 1 AS solution', (err, results, fields) => {
    if (err) {
        console.error('Error ejecutando la consulta:', err);
        return;
    }
    console.log('La solución es:', results[0].solution);
    connection.end(); // Cierra la conexión después de la consulta
});