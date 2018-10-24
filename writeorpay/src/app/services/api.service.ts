import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {

  }

  public validateLogin(username: string, password: string) {
		this.http.post('http://localhost:3000/api/user/login',{
			username : username,
			password : password
		}).subscribe(val => {
      console.log(val);
    });
	}


}

