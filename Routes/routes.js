//voy a importar dentro de este archivo 

import { Router } from "express";
import { postProducts, getProducts, getProduct, putProducts, deleteProducts } from "../Controllers/productos_controller.js";
import clientesController  from "../controllers/clientes_controller.js";
import pedidosController from "../controllers/pedidos_controller.js";
import pedidosProdController from '../controllers/pedidosProductos_controller.js';


//voy a crear una instancia de router
//este es el manejador de rutas
const router = Router();

//defino las rutas
router.get('/', (req, res) => {
    res.send('GET Pagina principal 2.0 con nodemon');
}
);

// clientes
router.get('/clientes', clientesController.getClientes);
router.post('/clientes', clientesController.postCliente);
router.put('/clientes/:id', clientesController.putCliente);
router.delete('/clientes/:id', clientesController.deleteCliente);

//productos
router.get("/productos", getProducts);
router.get("/productos/:idProducto", getProduct);
router.post('/productos', postProducts);
//le envio el id del producto para que lo reciba en el controlador
router.put ('/productos/:idProducto', putProducts);
router.delete('/productos/:idProducto', deleteProducts);

//pedidos
router.get('/pedidos/:id', pedidosController.getPedido);
router.post('/pedidos', pedidosController.postPedido);
router.put('/pedidos/:id', pedidosController.putPedido);
router.delete('/pedidos/:id', pedidosController.deletePedido);

//pedidos productos
router.get('/pedidosProd', pedidosProdController.getPedidosProd);
router.post('/pedidosProd', pedidosProdController.postPedidoProd);
router.put('/pedidosProd/:id', pedidosProdController.putPedidoProd);
router.delete('/pedidosProd/:id', pedidosProdController.deletePedidoProd);

//exporto el modulo router
export {
    router
}