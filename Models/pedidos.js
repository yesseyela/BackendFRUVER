import { DataTypes } from 'sequelize';
import { sequelize } from '../Database/database.js';

const Pedido = sequelize.define('pedidos', {
    idPedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idCliente:{
        type: DataTypes.INTEGER,
    },
    fechaSolicitud:{
        type: DataTypes.DATE,
    },
    estado:{
        type: DataTypes.STRING(100),
    },
}, {
    timestamps: false
});

export default Pedido;