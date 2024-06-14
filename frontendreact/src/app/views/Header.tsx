import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="container">
            <div>
                <div className="row">
                <div
                        className="d-flex mt-3 col-1"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <Link
                            to="/"
                            className="btn btn-dark"
                        >
                            Inicio
                        </Link>
                    </div>
                    <div
                        className="d-flex mt-3 col"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <Link
                            to="/empleadosCrear"
                            className="btn btn-outline-secondary"
                        >
                            Crear Empleados
                        </Link>
                    </div>
                    <div
                        className="d-flex mt-3 col"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <Link
                            to="/empleadosTodos"
                            className="btn btn-outline-secondary"
                        >
                            Consultar Empleados
                        </Link>
                    </div>
                    <div
                        className="d-flex mt-3 col"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <Link
                            to="/solicitudesCrear"
                            className="btn btn-outline-secondary"
                        >
                            Crear Solicitudes
                        </Link>
                    </div>

                    <div
                        className="d-flex mt-3 col"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <Link
                            to="/solicitudesAdmin"
                            className="btn btn-outline-secondary"
                        >
                            Administrar Solicitudes
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
