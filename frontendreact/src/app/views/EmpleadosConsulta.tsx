import { useState, useEffect } from 'react';
import Empleado from '../models/Empleado'
import ApiBack from '../utils/dominios/ApiBack';
import Servicio from '../services/Servicio';
import { Link } from 'react-router-dom';
import { Header } from './Header';

export const EmpleadoListado = () => {
    const [aregloEmpleados, setaregloEmpleados] = useState<Empleado[]>([]);

    const obtenerEmpleados = async () => {
        const resultado = await Servicio.peticionGET(
            ApiBack.OBTENERTODOS_EMPLEADO
        );
        console.log(resultado);
        setaregloEmpleados(resultado);
        return resultado;
    };

    useEffect(() => {
        obtenerEmpleados();
    }, []);

    return (
        <div >
            <Header/>
            <main id="main" className="main">
                <div className="pagetitle ">
                    <h1>Empleados</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">Inicio</Link>
                            </li>
                            <li className="breadcrumb-item active">
                                Listado de Empleados
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th style={{ width: '10%' }}>#</th>
                                        <th style={{ width: '30%' }}>Nombre</th>
                                        <th style={{ width: '20%' }}>Fecha de Ingreso</th>
                                        <th style={{ width: '20%' }}>Salario</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {aregloEmpleados.map((empleado, indice) => (
                                        <tr key={indice}>
                                            <td>{indice + 1}</td>
                                            <td>{empleado.nombre}</td>
                                            <td>{empleado.fecha_ingreso}</td>
                                            <td className='text-center'>{empleado.salario}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};