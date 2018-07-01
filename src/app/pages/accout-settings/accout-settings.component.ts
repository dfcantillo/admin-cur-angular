import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../providers/service.index';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {
 

  constructor(
     private _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  
  }

  cambiarColor(tema: string , link: any ){

    this._ajustes.aplicarTema(tema);
    
    this.checkquearColor(link);
  
  }

  checkquearColor(link: any){
    
    let selectores: any = document.getElementsByClassName('selector');
    for (let ref of selectores){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck(){
    let tema = this._ajustes.ajustes.tema;
    let selectores: any = document.getElementsByClassName('selector');
    for (let ref of selectores){
      if (tema === ref.getAttribute('data-theme')){
        ref.classList.add('working');
        break;
      }
    }
  }

}
