import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Livro } from '../../model/livro';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public livros: Livro [];  

  constructor(public navCtrl: NavController) {
    this.livros = [
      {nome: "Harry Potter e a pedra filosofal", autor:"J.K Rolling"}
      
      
    ];
  }
  vai(livro: Livro){

    this.navCtrl.push(InfoPage, {livroSelecionado: livro});
  }

}
