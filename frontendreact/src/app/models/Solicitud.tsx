class SolicitudEntidad {
    public codigo: string
    public descripcion: string
    public resumen: string
    public id_empleado: number

    constructor(codigo: string, descripcion: string, resumen: string, id_empleado: number) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.resumen = resumen
        this.id_empleado = id_empleado;
    }

}
export default SolicitudEntidad