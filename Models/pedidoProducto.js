import { DataTypes } from 'sequelize';
import { sequelize } from '../Database/database.js';

const PedidoProducto = sequelize.define('pedidosproductos', {
    idPedProd: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idPedido:{
        type: DataTypes.INTEGER,
    },
    idProducto:{
        type: DataTypes.INTEGER,
    },
    cantidad:{
        type: DataTypes.INTEGER,
    },
}, {
    timestamps: false
});

export default PedidoProducto;