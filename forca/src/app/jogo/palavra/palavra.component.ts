import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-palavra',
  templateUrl: './palavra.component.html',
  styleUrls: ['./palavra.component.css']
})
export class PalavraComponent implements OnInit {

  public underline:string = '_'
  public letra!:string



  constructor(){ }

  ngOnInit(){ }



  public mudarLetra(letra:Event){ /// Lógica para o retorno da letra do botão, quando clicado
    this.letra = (<HTMLInputElement>letra.target).innerText
    this.underline = this.letra
    console.log(this.letra)
    
  }

}
