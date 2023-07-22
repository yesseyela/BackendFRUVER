const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost', 
    user: 'root',
    password: '',
    database: 'fruver_bd',
    port : '3306'
});

const getProductos = async (req, res) => {
    //res.send('GET desde base de datos');
    await pool.query('SELECT * FROM productos', (error, datos) => {
        if (error) {
            console.error(error);
            res.status(400).json({ "msg": error }); //buscar errores de codigo de respuesta http
            //el error 400 es un error de cliente
        } else{
            console.log(datos);
            //si no hay error
            res.status(200).json(datos);
            //el estado 200 es un estado de exito
        }
    });
}

const postProductos = async(req, res) => {
    //(res.send('POST desde base de datos');
    const { nombre, detalle, precio } = req.body;
    await pool.query(
      `INSERT INTO productos(nombre, detalle, precio) VALUES('${nombre}','${detalle}','${precio}')`,
      (err, data) => {
        if (err) {
          console.error(err);
          res.status(400).json({ mensaje: err });
          return;
        } else {
          console.log(data);
          res.status(200).json({
            body: {
              producto: {
                nombre,
                detalle,
                precio
              },
          }
        });
        }
      }
    );
}


const putProductos = (req, res) => {
    //res.send('PUT desde base de datos');
    const { nombre, detalle, precio } = req.body;
    const { idProducto } = req.params;
    //aqui envio el id y con el json desde insomnia envio nombre y detalle
    pool.query(
        `UPDATE productos SET nombre='${nombre}', detalle='${detalle}', precio='${precio}' WHERE idProducto=${idProducto}`,
        (error, datos) => {
            if (error) {
                console.error(error);
                res.status(400).json({ "msg": error });
            } else {
                console.log(datos);
                res.status(200).json({
                    body: {
                        producto: {
                            nombre,
                            detalle,
                            precio
                        }
                    }
                });
            }
        }
    );
}

const deleteProductos = async(req, res) => {
    //res.send('DELETE desde base de datos');
    const { idProducto } = req.params;
    await pool.query(
      `DELETE FROM productos WHERE idProducto='${idProducto}'`,
      (err, data) => {
        if (err) {
          console.error(err);
          res.status(400).json({ mensaje: err });
          return;
        } else {
          console.log(data);
          res.status(200).json({
            body: {
              mensaje: `Producto con id ${idProducto} eliminado`,
            }
          });
        }
      }
    );
}

module.exports = {
    getProductos,
    postProductos,
    putProductos,
    deleteProductos,
}


