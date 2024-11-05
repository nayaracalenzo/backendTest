const {Sequelize} = require('sequelize')
const dotenv = require('dotenv').config()


const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',   // Define o tipo de banco de dados
  protocol: 'postgres',  // Define o protocolo (caso esteja usando SSL)
  dialectOptions: {
    ssl: {
      require: true,      // Requer SSL (ajustar se necessário)
      rejectUnauthorized: false // Usado para conexões com SSL não-verificado (se aplicável)
    }
  },
  logging: false         // Desativa logs de SQL para limpar o console
});

const connectToDatabase = async () => {
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}

connectToDatabase()
module.exports = sequelize