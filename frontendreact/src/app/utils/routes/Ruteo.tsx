import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Principal } from '../../views/Principal';
import { Error404 } from '../../views/Error404';
import { EmpleadoCrear } from '../../views/Empleados';
import { EmpleadoListado } from '../../views/EmpleadosConsulta';
import { SolicitudCrear } from '../../views/Solicitudes';
import { SolicitudAdmin } from '../../views/SolicitudesAdmin';


/*componentes lazy deben iniciar con mayuscula  */
const LazyPrincipal = lazy(() =>
    import('../../views/Principal').then(() => ({ default: Principal }))
);const LazyError404 = lazy(() =>
    import('../../views/Error404').then(() => ({ default: Error404 }))
);
const LazyEmpleados = lazy(() =>
import('../../views/Empleados').then(() => ({
    default: EmpleadoCrear,
})));
const LazyEmpleadosListado = lazy(() =>
    import('../../views/EmpleadosConsulta').then(() => ({
        default: EmpleadoListado,
    })));
const LazySolicitudes = lazy(() =>
        import('../../views/Solicitudes').then(() => ({
            default: SolicitudCrear,
        })));
const LazySolicitudesAdmin = lazy(() =>
            import('../../views/Solicitudes').then(() => ({
                default: SolicitudAdmin,
            })));
/*


);                <Route path="/team" element={<LazyTeam />} />

                //<Route path="/inicioSesion" element={<LazyInicioSesion />} />
               // <Route path="/Registro" element={<LazyRegistro />} />
             //   <Route path="/productos" element={<LazyProducts/>} />*/

export const Ruteo = () => {
    return (
            <Routes>
                <Route path="/" element={<LazyPrincipal />} />
                <Route path='/empleadosCrear' element={<LazyEmpleados/>}/>
                <Route path='/empleadosTodos' element={<LazyEmpleadosListado/>}/>
                <Route path='/solicitudesCrear' element={<LazySolicitudes/>}/>
                <Route path='/solicitudesAdmin' element={<LazySolicitudesAdmin/>}/>

                
                <Route path="*" element={<LazyError404 />} />
            </Routes>
    );
};