import { Request, Response } from 'express';
import SolicitudService from '../service/Solicitud.Service';

class SolicitudController extends SolicitudService {
    public consultarTodos(req: Request, res: Response) {
        SolicitudController.obtenerTodas(req, res);
    }
    public crear(req: Request, res: Response) {
        SolicitudController.insertarSolicitud(req, res);
    }
    public eliminarSolicitud(req: Request, res: Response) {
        SolicitudController.borrarSolicitud(req, res);
    }
}

const solicitudController = new SolicitudController();

export default solicitudController;
