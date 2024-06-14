import { Router } from 'express';
import empleadoController from '../controller/Empleado.Controller';

class EmpleadoRouter {
    public rutaApi: Router;

    constructor() {
        this.rutaApi = Router();
        this.configRouter()
        
    }
    public configRouter():void{
        this.rutaApi.get('/todos',empleadoController.consultarTodos)
        this.rutaApi.post('/crear',empleadoController.crear)
    }

}
const empleadoRouter= new EmpleadoRouter();

export default empleadoRouter.rutaApi;