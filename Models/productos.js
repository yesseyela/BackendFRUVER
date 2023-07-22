import { DataTypes } from 'sequelize';
import { sequelize } from '../Database/database.js';

//defino una constante llamada Producto
//hago la relacion con la tabla productos
// que tiene la tabla, idproducto, nombre y detalle
const Producto = sequelize.define(
    'productos', {
  // aqui van los campos de la tabla, tal cual estan definidos en la base de datos
  //le tengo que definir q es el tipo de dato
  idProducto: {
    type: DataTypes.INTEGER,
    allowNull: false, //NO PERMITE NULOS
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
  },
  detalle:{
    type: DataTypes.STRING,
  },
    precio: {
    type: DataTypes.INTEGER,
    },
}, {
    timestamps: false
});

export {
    Producto
}
