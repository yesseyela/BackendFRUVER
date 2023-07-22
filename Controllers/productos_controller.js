import Producto from "../Models/productos.js";

//funcion para obtener los productos
//recuperar de la base de datos
const getProducts = async (req, res) => {
    //res.send(' GET Pagina de productos desde controller');

    //consulta con sequelize
    try{
      const productos = await Producto.findAll(); //encontrar con metodo find all
      res.status(200).json(productos);
    } catch (error){
      res.status(400).json({mensaje: error});
    }
}

//producto por id
const getProduct = async (req, res) => {
    //res.send(' GET Pagina de productos desde controller');
    const { idProducto } = req.params;
    //consulta con sequelize
    try{
      const productoid = await Producto.findByPk(idProducto); //encontrar con metodo find all
      res.status(200).json([productoid]);
    } catch (error){
      res.status(400).json({mensaje: error});
    }
  }

//insertar registros en la base de datos, usando async await
const postProducts = async (req, res) => {
    //res.send('Hola estamos en productos')

    //consulta con sequelize
    const { nombre, detalle, precio } = req.body;
    try {
      const newProducto = await Producto.create({
        nombre,
        detalle,
        precio
      });
      res.status(200).json(newProducto);
    } catch (error) {
      res.status(400).json({ mensaje: err });
    }

  };

const putProducts = async (req, res) => {
    //res.send(' PUT Pagina de productos desde controller');

    //consulta con sequelize
 
    const { idProducto } = req.params;
    const { nombre, detalle, precio } = req.body;
    try {
      const oldProducto = await Producto.findByPk(idProducto);
      oldProducto.nombre = nombre;
      oldProducto.detalle = detalle;
      oldProducto.precio = precio;
      const modProducto = await oldProducto.save();
      res.status(200).json(modProducto);
    } catch (error) {
      res.status(400).json({ mensaje: err });
    }

}

const deleteProducts = async (req, res) => {
    //res.send('Hola estamos en productos')

    //consulta con sequelize
    const { idProducto } = req.params;
    try {
      const eliminar = await Producto.destroy({
        where: {
          idProducto,
        },
      });
      res.status(200).json({ mensaje: `Producto con id ${idProducto} eliminado` });
    } catch (error) {
      console.error(error);
      res.status(400).json({ mensaje: error });
    }
  };

export { getProducts, getProduct, postProducts, putProducts, deleteProducts };
