import { Link } from 'react-router-dom';

export const Principal = () => {
    return (
        <div>
            <section id="hero" className="hero d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 data-aos="fade-up">Pagina incio Prueba</h2>
                            <div className="row">
                                <div
                                    className="d-flex mt-3 col"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <Link
                                        to="/empleadosCrear"
                                        className="btn btn-get-started"
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
                                        className="btn btn-get-started"
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
                                        className="btn btn-get-started"
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
                                        className="btn btn-get-started"
                                    >
                                        Administrar Solicitudes
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="footer" className="footer">
                <div className="footer-content">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-5 col-md-12 footer-info">
                                <Link
                                    to="index.html"
                                    className=" d-flex align-items-center"
                                >
                                    <span>Nova</span>
                                </Link>
                                <p>
                                    Cras fermentum odio eu feugiat lide par naso
                                    tierra. Justo eget nada terra videa magna
                                    derita valies darta donna mare fermentum
                                    iaculis eu non diam phasellus.
                                </p>
                                <div className="social-links d-flex  mt-3">
                                    <Link to="#" className="WhatsApp">
                                        <i className="bi bi-whatsapp"></i>
                                    </Link>
                                    <Link to="#" className="facebook">
                                        <i className="bi bi-facebook"></i>
                                    </Link>
                                    <Link to="#" className="instagram">
                                        <i className="bi bi-instagram"></i>
                                    </Link>
                                    <Link to="#" className="linkedin">
                                        <i className="bi bi-linkedin"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md footer-contact text-center text-md-start">
                                <h4>Contact Us</h4>
                                <p>
                                    A108 Adam Street <br />
                                    Bogota, Colombia <br></br>
                                    <strong>Phone:</strong> +1 5589 55488 55
                                    <br />
                                    <strong>Email:</strong> info@example.com
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-legal">
                    <div className="container">
                        <div className="copyright">
                            &copy; Copyright{' '}
                            <strong>
                                <a href="#" rel="noreferrer">
                                    Santiago Paredes
                                </a>
                            </strong>
                            . All Rights Reserved
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
