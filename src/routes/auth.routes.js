//login sesiones usuarios esas cosas sera este archivo de rutas
import { Router } from "express";
import authController from "../controllers/auth.controller.js";
//formas de llamar funcinones
/* import {login }from "./..controllers/auth.route.js"; */
/* import * as authController from "./..controllers/auth.route.js"; */
//iniciamos router
const Route = Router()

Route.post('/auth/login',authController.login);
Route.post('/auth/registro',authController.registro);
Route.get('/auth/perfil',authController.perfil);
Route.post('/auth/logout',authController.logout);

export default Route;