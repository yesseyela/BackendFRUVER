//vamos a importar sequelize
import Sequelize from 'sequelize';
//importo la configuracion de la base de datos
const sequelize = new Sequelize("fruver_bd", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export { 
    sequelize 
}

