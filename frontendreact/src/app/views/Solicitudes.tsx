import { Form, Col, Row, Button } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

import Solicitud from '../models/Solicitud'
import Servicio from '../services/Servicio';
import ApiBack from '../../app/utils/dominios/ApiBack';
import { useFormulario } from '../utils/myHooks/useFormulario';
import { MensajeTostify } from '../utils/function/MensajeToastify';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';

export const SolicitudCrear = () => {
    type formaHtml = React.FormEvent<HTMLFormElement>;
    const [enProceso, setEnProceso] = useState<boolean>(false);
    let { dobleEnlace, objeto } =
        useFormulario<Solicitud>(new Solicitud('', '','',0));

    const LimpiarForm = (formulario: HTMLFormElement) => {
        formulario.reset();
        objeto.codigo = '';
        formulario.codigo.value = '';
        formulario.classList.remove('was-validated');
    };
    const enviarFormulario = async (fh: formaHtml) => {
        fh.preventDefault();
        setEnProceso(true);
        const formularioActual = fh.currentTarget;

        formularioActual.classList.add('was-validated');
        if (formularioActual.checkValidity() === false) {
            fh.preventDefault(); /*no deja que se comporte por defecto */
            fh.stopPropagation(); /*detiene todas las acciones del formulario */
        } else {
            const resultado = await Servicio.peticionPOST(
                ApiBack.SOLICITUDES_CREAR,
                objeto
            );

            if (resultado) {
                setEnProceso(false);
                MensajeTostify('success', 'Solicitud creado con exito', 6000);
            } else {
                MensajeTostify(
                    'error',
                    'NO se pude crear la Solicitud, puede que ya exita una solicitud con este codigo',
                    6000
                );
            }
            LimpiarForm(formularioActual);
        }
    };

    return (
        <div>
            <Header/>
        <main id="main" className="main">
            {" "}
            <div className="pagetitle ">
                <h1>Solicitud</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/">Inicio</Link>
                        </li>
                        <li className="breadcrumb-item active">
                            Crear Solicitud
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Add Form Solicitud</h5>
                            <Form
                                noValidate={enProceso}
                                onSubmit={enviarFormulario}
                            >
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="codigo"
                                >
                                    <Form.Label column sm={2}>
                                        Codigo de Solicitud
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            required
                                            type="text"
                                            className="form-control"
                                            name="codigo"
                                            placeholder="Enter code "
                                            onChange={dobleEnlace}
                                        />
                                    </Col>
                                    <Form.Control.Feedback type="invalid">
                                        The code is REQUIRED
                                    </Form.Control.Feedback>
                                </Form.Group>
                                
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="descripcion"
                                >
                                    <Form.Label column sm={2}>
                                        Descripcion de la Solicitud
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            required
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter descripcion for Solicitud"
                                            name="descripcion"
                                            onChange={dobleEnlace}
                                        ></Form.Control>
                                    </Col>
                                    <Form.Control.Feedback type="invalid">
                                        The description of Solicitud is REQUIRED
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="resumen"
                                >
                                    <Form.Label column sm={2}>
                                        Resumen Solicitud
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            required
                                            type="text"
                                            className="form-control"
                                            name="resumen"
                                            placeholder="Enter resumen for Solicitud"
                                            onChange={dobleEnlace}
                                        />
                                    </Col>
                                    <Form.Control.Feedback type="invalid">
                                        The resumen of Solicitud is REQUIRED
                                    </Form.Control.Feedback>
                                </Form.Group>
                                
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="id_empleado"
                                >
                                    <Form.Label column sm={2}>
                                        id_empleado
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            required
                                            type="number"
                                            className="form-control"
                                            name="id_empleado"
                                            placeholder="Lo puede consultar en el listado"
                                            onChange={dobleEnlace}
                                        />
                                    </Col>
                                    <Form.Control.Feedback type="invalid">
                                        The id employmet is REQUIRED
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Col sm={{ span: 10, offset: 2 }}>
                                        <Button type="submit">
                                            Crear Solicitud
                                        </Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </main>
    </div>
    );
};