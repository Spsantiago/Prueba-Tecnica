import { Request, Response } from 'express';



import ConectionDB from "../config/ConectionDB";


class SolicitudService {

    protected static async obtenerTodas( req:Request,res: Response): Promise<any> {
        try {
            const query = "SELECT * FROM solicitudes";
            const result = await ConectionDB.query(query);
            res.status(200).json(result.rows);
        } catch (err) {
            console.log(err);
            res.status(400).json({ respuesta: "Error en la consulta" });
        }
    }

    protected static async insertarSolicitud(req:Request, res: Response): Promise<any> {
        try {
            const {
                codigo,
                descripcion,
                resumen,
                id_empleado
            }=req.body;
           
            if (!id_empleado){
                res.status(400).json({ respuesta: "Error en la creacion de la solicitud" });
            } 
            const existe = await ConectionDB.query(`SELECT * FROM solicitudes where codigo='${codigo}'`)
            if(existe.rows.length > 0) {
                res.status(400).json({ respuesta: "El codigo de la solicitud ya existe" });
            }else {
            const query= "INSERT INTO solicitudes (codigo,descripcion,resumen,id_empleado) VALUES($1,$2,$3,$4)"
            const values=[codigo,descripcion,resumen,id_empleado]
            await ConectionDB.query(query, values);
            res.status(200).json({mesagge: "success"});
        }}
        catch(err) {
            console.log(err);
            res.status(400).json({ respuesta: "Error en la creacion de la solicitud" });
        }
    }

    protected static async borrarSolicitud(req: Request, res: Response): Promise<any> {
        try {
            const {codigo}= req.params
            const existe = await ConectionDB.query(`SELECT * FROM solicitudes where codigo='${codigo}'`)
            if (existe.rows.length == 0) {
                res.status(400).json({ respuesta: "La solicitd no existe" });
            } else {
                const query = `DELETE FROM solicitudes WHERE codigo='${codigo}'`;
                const result = await ConectionDB.query(query);
                res.status(200).json({
                    respuesta: "solicitud eliminada con exito",
                });
            }
        } 
        catch(err) { 
            console.log(err);
            res.status(400).json({ respuesta: "Error al eliminar la solicitud" });}
    }
}

export default SolicitudService;
