import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { MensajeTostify } from '../utils/function/MensajeToastify';
import Servicio from '../services/Servicio';
import ApiBack from '../utils/dominios/ApiBack';
import Solicitud from '../models/Solicitud';
import { ToastContainer } from 'react-toastify';
import { Header } from './Header';

export const SolicitudAdmin = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [aregloSolicitud, setaregloSolicitud] = useState<Solicitud[]>([]);

    const [objPro, setobjPro] = useState<Solicitud>(new Solicitud('', '','', 0));
    const obtenerPerfiles = async () => {
        const resultado = await Servicio.peticionGET(
            ApiBack.SOLICITUDES_OBTENER
        );
        setaregloSolicitud(resultado);
        return resultado;
    };

    const borrarProducto= async (codigo: number) => {
        const urlBorrar = ApiBack.SOLICITUDES_ELIMINAR + '/' + codigo;
        const resultado = await Servicio.peticionDELETE(urlBorrar);
        if (typeof resultado === 'undefined') {
            MensajeTostify(
                'error',
                'no se puede elminiar el producto, es posile que relacione stock',
                6000
            );
        } else {
            MensajeTostify('success', 'Solicitud eliminado exitosamente', 6000);
        }
        obtenerPerfiles();
    };

    useEffect(() => {
        obtenerPerfiles();
    }, []);

    return (
        <div>
            <Header/>
            <main id="main" className="main">
                <div className="pagetitle ">
                    <h1>Productos</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/dashboard">Inicio</Link>
                            </li>
                            <li className="breadcrumb-item active">
                                Listado de Productos
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <table className="table table-hover table-sm ">
                                <thead>
                                    <tr>
                                        <th style={{ width: '10%' }}>Codigo</th>
                                        <th style={{ width: '40%' }}>Descripcion</th>
                                        <th style={{ width: '40%' }}>Resumen</th>
                                        <th style={{ width: '5%' }}>Id_Empleado</th>
                                        <th style={{ width: '5%',textAlign:'center'  }}>Acciones</th>
                                       <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {aregloSolicitud.map((solicitud, indice) => (
                                        <tr key={indice}>
                                            <td>{solicitud.codigo}</td>
                                            <td>{solicitud.descripcion}</td>
                                            <td className="text-center">
                                                {solicitud.resumen}
                                            </td>
                                            <td> {solicitud.id_empleado}</td>
                                            <td>
                                            <button
                                                        className="btn mx-2 btn-md"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setobjPro(solicitud);
                                                            setShow(true);
                                                        }}
                                                    >
                                                        <i
                                                            className="fa-solid fa-trash-can"
                                                            style={{
                                                                color: '#fc0a0a',
                                                            }}
                                                        ></i>
                                                    </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Deseas Eliminar</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Estas Seguro que deseas Elmininar{' '}
                                    <strong>{objPro.codigo}</strong>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={(e) => {
                                            setShow(false);
                                        }}
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={() => {
                                            borrarProducto(Number(objPro.codigo));
                                            setShow(false);
                                        }}
                                    >
                                        Eliminar
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </main>
        </div>
    );
};