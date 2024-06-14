import { Router } from 'express';
import solicitudController from '../controller/Solicitud.Controller';


class SolicitudRouter {
    public rutaApi: Router;

    constructor() {
        this.rutaApi = Router();
        this.configRouter()
        
    }
    public configRouter():void{
        this.rutaApi.get('/todos',solicitudController.consultarTodos)
        this.rutaApi.post('/crear',solicitudController.crear)
        this.rutaApi.delete('/eliminar/:codigo',solicitudController.eliminarSolicitud)
    }

}
const solicitudRouter= new SolicitudRouter();

export default solicitudRouter.rutaApi;