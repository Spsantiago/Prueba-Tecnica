class EmpleadoEntidad {
    public fecha_ingreso: Date;
    public nombre: string;
    public salario: number;

    constructor(fecha_ingreso: Date, nombre: string, salario: number) {
        this.fecha_ingreso = fecha_ingreso;
        this.nombre = nombre;
        this.salario = salario;
    }
}

export default EmpleadoEntidad;
