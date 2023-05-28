import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Servidor } from './Servidor.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent implements OnInit {

  constructor(private servidor: Servidor) {

  }
  ngOnInit(): void {
    

  }

  title = 'app';
  public cadastro: boolean = true
  public login: boolean = false
  public User: any
  public id = "15"
  public Cadastrados =false


  public formulario = new FormGroup({
    'email': new FormControl(null),
    'nome': new FormControl(null),
    'apelido': new FormControl(null),
    'senha': new FormControl(null)

  })
  public form = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)

  })
  public Avancar(): void {
    console.log(this.formulario.value)
    this.cadastro = false
    this.login = true

  }
  
  public async Consultar() {
    console.log(this.form.value)
    this.cadastro = false
    this.login = false
    this.Cadastrados= await true
    this.servidor.GetDados()
      .then((dados: any) => {
        this.User=dados
        console.log(dados)
      })
      this.Armazenar()
     
  }
  public  Armazenar() {

    //json server cria o ID automaticamente
    let dados = { 
      'ID':6,     
      'email': this.formulario.value.email,
      'nome':this.formulario.value.nome,
      'apelido':this.formulario.value.apelido,
      'senha':this.formulario.value.senha

    }
    
    this.servidor.ArmazenarDados(dados)
    
    
  }
  
}
