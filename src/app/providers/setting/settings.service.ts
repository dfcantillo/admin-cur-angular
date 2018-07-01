import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema : 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustesLocalStore();
   }

  guardarAjustes(){
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustesLocalStore(){
    if (localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.tema);
    }else{
      this.aplicarTema(this.ajustes.tema);
    }
    
  }

  aplicarTema(tema: string){
    let ruta: string = `assets/css/colors/${tema}.css`;
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = ruta;
    this._document.getElementById('referenciaTema').setAttribute('href', this.ajustes.temaUrl);
    this.guardarAjustes();
  }



}

export interface Ajustes{
  temaUrl: string;
  tema: string;
}
