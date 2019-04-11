import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lista: any[] = []

  constructor( private http:HttpClient) {

    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe( (resp: any) => {
        this.lista = resp;
        console.log(resp);
      });
    
   }

  ngOnInit() {
  }

}
