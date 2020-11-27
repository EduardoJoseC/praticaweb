import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exibe-imagem',
  templateUrl: './exibe-imagem.component.html',
  styleUrls: ['./exibe-imagem.component.css']
})
export class ExibeImagemComponent implements OnInit {

  public imgPerfil = "https://avatars0.githubusercontent.com/u/61809360?s=460&u=c821bc52d9573f3036d653305b89699eec490184&v=4";

  public usuario = "Eduardo José";

  public exibe = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  public exibePerfil(){
    this.exibe = !this.exibe;
  }
}