const { Sequelize } = require('sequelize');


//connect to mysql(xampp)
const sequelize = new Sequelize('node_sequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

//test the database connection
sequelize.authenticate()
    .then(() => console.log(' Connected to MySQL (XAMPP)'))
    .catch(err => console.error(' Database connection failed:', err));

module.exports = sequelize;