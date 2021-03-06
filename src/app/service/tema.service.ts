import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  /*
getAlltema(): Observable<Tema[]>{
  return this.http.get<Tema[]>('http://localhost:8080/tema', this.token)
}

getByIdTema(id: number): Observable<Tema>{
  return this.http.get<Tema>(`http://localhost:8080/tema/${id}`, this.token)
}

postTema(tema: Tema): Observable<Tema>{
  return this.http.post<Tema>('http://localhost:8080/tema', tema, this.token)
}

putTema(tema: Tema): Observable<Tema>{
  return this.http.put<Tema>('http://localhost:8080/tema', tema, this.token)
}

deleteTema(id: number){
  return this.http.delete(`http://localhost:8080/tema/${id}`, this.token)
}

*/
  getAlltema(): Observable<Tema[]> {
    return this.http.get<Tema[]>('https://meublogpessoal.herokuapp.com/tema', this.token)
  }

  getByIdTema(id: number): Observable<Tema> {
    return this.http.get<Tema>(`https://meublogpessoal.herokuapp.com/tema/${id}`, this.token)
  }

  getByNomeTema(nome: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://meublogpessoal.herokuapp.com/tema/nome/${nome}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>('https://meublogpessoal.herokuapp.com/tema', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>('https://meublogpessoal.herokuapp.com/tema', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://meublogpessoal.herokuapp.com/tema/${id}`, this.token)
  }

}
