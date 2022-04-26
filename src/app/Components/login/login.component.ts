import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    ultimatix: new FormControl(),
    password: new FormControl()
  })


  constructor(private service: LoginService) { }

  ngOnInit(): void {}

  onSubmit(){
    this.service.login().subscribe((data)=>{
      console.log(data)
    })
  }

}
