import { Iempleado } from "../interfaces/Iempleado";

export class empleado implements Iempleado { 
    id_numero_Ultimatix : string;
    clave : string;
    nombre : string;
    apellido : string;
    telefono : string;
    correo : string;

    constructor(ultimatix : string, clave : string, nombre: string,
        apellido : string, telefono : string, correo : string){
        this.id_numero_Ultimatix = ultimatix;
        this.clave = clave;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
    }


    getUltimatix(){
        return this.id_numero_Ultimatix;
    }

    getClave(){
        return this.clave
    }

    getNombre(){
        return this.nombre
    }
    getApellido(){
        return this.apellido
    }
    getTelefono(){
        return this.telefono
    }
    getCorreo(){
        return this.correo
    }


}