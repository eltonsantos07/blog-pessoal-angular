import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
    ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://backendthiagofaccipieri.herokuapp.com/usuarios/logar', userLogin)
    //return this.http.post<UserLogin>('https://meublogpessoal.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://backendthiagofaccipieri.herokuapp.com/usuarios/cadastrar', user)

    //return this.http.post<User>('https://meublogpessoal.herokuapp.com/usuarios/cadastrar', user)
  }
}