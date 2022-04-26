import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { empleado } from 'src/app/class/empleado';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {


  form = new FormGroup({
    name: new FormControl(),
    last_name: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    ultimatix: new FormControl(),
    password: new FormControl(),

  })

  constructor(private service : LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let aux = this.form.value;
    this.service.newUser(new empleado(aux.ultimatix,aux.password,aux.name, aux.last_name, aux.phone, aux.email))
  }
}
