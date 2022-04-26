import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { empleado } from '../class/empleado';
import { Iempleado } from '../interfaces/Iempleado';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  newUser(Empleado : empleado){
    console.log(Empleado);
    return this.http.post("/asociados/agregarAsociado", Empleado).toPromise().then(()=>{
      console.log("SE INSERTO!")
    }).catch((e) => {
      console.log(e);
    })

    /*
    ."id_numero_Ultimatix": Empleado.getUltimatix(),
      "clave":Empleado.getClave(),
      "nombre":Empleado.getNombre(),
      "apellido": Empleado.getApellido(),
      "telefono": Empleado.getTelefono(),
      "correo":Empleado.getCorreo()
    
      {
          "id_numero_Ultimatix":"123456",
          "clave":"clave",
          "nombre":"Juan",
          "apellido": "Cho",
          "telefono": "098456123",
          "correo":"Juan@hotmail.com"
      }
    */
  }


  login(){
    return this.http.get<Iempleado>('/asociado/tcs-login');
  }
  
}
