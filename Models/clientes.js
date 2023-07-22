import { DataTypes } from 'sequelize';
import { sequelize } from '../Database/database.js';

const Cliente = sequelize.define('clientes', {
    idCliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    identificacion:{
        type: DataTypes.STRING(100),
    },
    nombre:{
        type: DataTypes.STRING(100)
    },
    apellido:{
        type: DataTypes.STRING(100)
    },
}, {
    timestamps: false
});

export default Cliente;