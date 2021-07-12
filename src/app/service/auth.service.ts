import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
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
    //return this.http.post<UserLogin>('https://backendthiagofaccipieri.herokuapp.com/usuarios/logar', userLogin)
    
    return this.http.post<UserLogin>('https://meublogpessoal.herokuapp.com/usuarios/logar', userLogin)

    //return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin)
  }

  cadastrar(user: User): Observable<User>{
    //return this.http.post<User>('https://backendthiagofaccipieri.herokuapp.com/usuarios/cadastrar', user)

    return this.http.post<User>('https://meublogpessoal.herokuapp.com/usuarios/cadastrar', user)

    //return this.http.post<User>('http://localhost:8080/usuarios/cadastrar', user)
  }

  atualizar(user: User): Observable<User>{
    //return this.http.put<User>('https://backendthiagofaccipieri.herokuapp.com/usuarios/cadastrar', user)

    return this.http.put<User>('https://meublogpessoal.herokuapp.com/usuarios', user)

    //return this.http.put<User>('http://localhost:8080/usuarios/cadastrar', user)
  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://meublogpessoal.herokuapp.com/usuarios/${id}`)

    //return this.http.get<User>(`http://localhost:8080/usuarios/${id}`)
  }

  /**
   * verificar se o token não é vazio para certificar que o ususario está logado
   * 
   * verificar se o token não é vazio para certificar que o ususario está logado
   * */ 
  //método usado para mostrar componentes na tela apenas quando o usuario estiver logado
  logado(){

    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }
    return ok
  }
}
