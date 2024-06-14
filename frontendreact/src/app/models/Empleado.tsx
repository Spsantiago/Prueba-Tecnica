class EmpleadoEntidad {
    public fecha_ingreso: string;
    public nombre: string;
    public salario: number;

    constructor(fecha_ingreso: string, nombre: string, salario: number) {
        this.fecha_ingreso = fecha_ingreso;
        this.nombre = nombre;
        this.salario = salario;
    }
}

export default EmpleadoEntidad;
