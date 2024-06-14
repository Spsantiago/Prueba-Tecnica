import { Request, Response } from 'express';
import EmpleadoService from '../service/Empleado.Service';

class EmpleadoController extends EmpleadoService {
    public consultarTodos(req:Request,res: Response) {
        EmpleadoController.obtenerTodos(req,res);
    }
    public crear(req:Request,res: Response) {
        EmpleadoController.insertarEmpleado(req,res);
    }
}

const empleadoController = new EmpleadoController();

export default empleadoController;
