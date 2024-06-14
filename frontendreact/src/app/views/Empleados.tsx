import { Form, Col, Row, Button } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

import Empleado from '../models/Empleado'
import Servicio from '../services/Servicio';
import ApiBack from '../../app/utils/dominios/ApiBack';
import { useFormulario } from '../utils/myHooks/useFormulario';
import { MensajeTostify } from '../utils/function/MensajeToastify';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';

export const EmpleadoCrear = () => {
    type formaHtml = React.FormEvent<HTMLFormElement>;
    const [enProceso, setEnProceso] = useState<boolean>(false);
    let { dobleEnlace, objeto } =
        useFormulario<Empleado>(new Empleado('', '',0));

    const LimpiarForm = (formulario: HTMLFormElement) => {
        formulario.reset();
        objeto.nombre = '';
        formulario.nombre.value = '';
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
                ApiBack.CREAR_EMPLEADO,
                objeto
            );

            if (resultado.nombre) {
                setEnProceso(false);
                MensajeTostify('success', 'Empleado creado con exito', 6000);
            } else {
                MensajeTostify(
                    'error',
                    'NO se pude crear el empleado',
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
                <h1>Empleados</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/">Inicio</Link>
                        </li>
                        <li className="breadcrumb-item active">
                            Crear Empleado
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Add Form Empleados</h5>
                            <Form
                                noValidate={enProceso}
                                onSubmit={enviarFormulario}
                            >
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="nombre"
                                >
                                    <Form.Label column sm={2}>
                                        Nombre del empleado
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            required
                                            type="text"
                                            className="form-control"
                                            name="nombre"
                                            placeholder="Enter nombre for employment"
                                            onChange={dobleEnlace}
                                        />
                                    </Col>
                                    <Form.Control.Feedback type="invalid">
                                        The name from employment is REQUIRED
                                    </Form.Control.Feedback>
                                </Form.Group>
                                
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="fecha_ingreso"
                                >
                                    <Form.Label column sm={2}>
                                        Fecha ingreso Empleado
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            required
                                            type="Date"
                                            className="form-control"
                                            placeholder="Enter fecha_ingreso for Empleado"
                                            name="fecha_ingreso"
                                            onChange={dobleEnlace}
                                        ></Form.Control>
                                    </Col>
                                    <Form.Control.Feedback type="invalid">
                                        The fecha ingreso of Empleado is REQUIRED
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="salario"
                                >
                                    <Form.Label column sm={2}>
                                        salario Empleado
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            required
                                            type="number"
                                            className="form-control"
                                            name="salario"
                                            placeholder="Enter salario for Empleado"
                                            onChange={dobleEnlace}
                                        />
                                    </Col>
                                    <Form.Control.Feedback type="invalid">
                                        The salario of Empleado is REQUIRED
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Col sm={{ span: 10, offset: 2 }}>
                                        <Button type="submit">
                                            Crear Empleadoo
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