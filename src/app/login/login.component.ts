import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function Init_Plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    Init_Plugins();
  }

  ingresar(){
    this.router.navigate(['/dashboard']);
  }

}
