/* const express = require("express")
 */
//usamos import con sigma6
import  Express  from "express";
import rutasAuth from "./routes/auth.routes.js";


require('dotenv').config()

const app = Express();
//habilitamos las rutas con express(app) las de autenticacion

app.use("/api",rutasAuth)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("servidor http://127.0.0.1:"+PORT)

})