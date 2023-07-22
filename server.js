//llamo el modulo dentro del archivo
//const express = require('express');
//const routers = require('./Routes/routes.js');
import express from "express";
import { router } from "./Routes/routes.js";
import { sequelize } from "./Database/database.js";
//import { Producto } from "./Models/productos.js";
import cors from "cors";

//creo una instancia de express dentro de la aplicacion
//uso la instancia para configurar las rutas del proyecto
const app = express();

//configurar cors
app.use(cors());
//configurar el servidor para que entienda los datos que llegan
app.use(express.json());

//montar el enrutador en la app principal
app.use(router);

//establezca una variable port y luego recuperela con app.get
app.set("port", 3000);

//necesito una ruta para que la instancia escuche
//corriendo el servidor en el puerto 3000
//app.listen(3000, () => console.log('Hola Mundo desde Node en puerto 3000'));
//app.listen(app.get("port"), () => {
  //  console.log(`Servidor escuchando por puerto ${app.get("port")}`);
//});

//test de squealize
const testDb = async () =>{
    try {
        await sequelize.sync(); // la sync es para sincronizar la base de datos
        console.log('Conexion realizada con exito :3');
        //correr servicio por puerto 3000
        app.listen(app.get("port"), () => {
            console.log(`Servidor escuchando por puerto ${app.get("port")}`);
        });
    } catch (error) {
        console.error(`No funciona la conexion ${error}`);
    }
}
testDb();


//hasta ahi no hay rutas, solo se esta escuchando el puerto 3000
//por lo que solo aparecera un cannot get en el navegador


//esto se migra a rutas para mejor manejo
/*
//crear ruta, usando metodo get
//el primer parametro es la ruta, el segundo es una funcion
//que recibe dos parametros, el request y el response
//el request es lo que el usuario envia al servidor
//el response es lo que el servidor le responde al usuario
app.get('/', (req, res) => {
    res.send('Pagina principal 2.0 con nodemon');
}
);*/