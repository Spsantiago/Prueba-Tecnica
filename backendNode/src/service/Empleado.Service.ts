import { Request, Response } from 'express';



import ConectionDB from "../config/ConectionDB";
import EmpleadoEntidad from '../models/Empleado.Entitie';

class EmpleadoService {

    protected static async obtenerTodos( req:Request,res: Response): Promise<any> {
        try {
            const query = "SELECT * FROM empleado";
            const result = await ConectionDB.query(query);
            res.status(200).json(result.rows);
        } catch (err) {
            console.log(err);
            res.status(400).json({ respuesta: "Error en la consulta" });
        }
    }

    protected static async insertarEmpleado(req:Request, res: Response): Promise<any> {
        try {
            const {
                fecha_ingreso,
                nombre,
                salario
            }=req.body;
            let fecha = fecha_ingreso
            if(!fecha_ingreso){
                const currentDate = new Date();
                fecha= currentDate 
            }
            const newEmpleado = new EmpleadoEntidad(fecha, nombre, salario)
            console.log(newEmpleado);
            const query= "INSERT INTO empleado (fecha_ingreso,nombre,salario) VALUES($1,$2,$3)"
            const values=[fecha,nombre,salario]
            await ConectionDB.query(query, values);
            res.status(200).json(newEmpleado);
        }
        catch(err) {
            console.log(err);
            res.status(400).json({ respuesta: "Error en la creacion del empleado" });
        }
    }
}

export default EmpleadoService;
