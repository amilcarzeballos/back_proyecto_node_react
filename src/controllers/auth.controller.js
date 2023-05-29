//llamamos modelo generado
import models from "./../database/models/index"
export default {
    login:(req, res) =>{

    },

    registro : (req, res) =>{
        //registro datos req res req por url req.paramas.id en caso de datos del cuerpo es on body req.body
        //o req.query req.heders
        //aca caputuramos solo datos q envia el cliente solo email y password
        const { email, password } = req.body
        const user = models.User.findOne({
            where: {email: email}
        })
        if(!user){
            //registrar usuario
        }else{
            return res.status(422).json({mensaje: "el correo ya existe"})
        }
        
    },

    perfil : (req, res) =>{
        return res.send ("mi perfil")

    },

    logout : (req, res) =>{

    }
    //esto sirve para exportar todas las funciones


}