import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema();
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      //this.alertas.showAlertInfo('Sua seção expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])
    }

    //Alerta usado caso o link 'adicione um tema novo'estivesse visível para todos os usuários
    
    /*if(environment.tipo != 'adm'){
      this.alertas.showAlertInfo('Apenas administradores tem acesso a esta rota')
      this.router.navigate(['/inicio'])
    }*/

    this.findAllTemas()
  }

  findAllTemas(){
    this.temaService.getAlltema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp
      this.alertas.showAlertSuccess('Tema cadastrado com sucesso!')
      this.findAllTemas()
      this.tema = new Tema()//Apaga o valor no input para o usuário não precisar apagar 
    })
  }

}
