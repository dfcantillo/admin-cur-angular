import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  valorProgress1: number = 50;
  valorProgress2: number = 25;
  constructor() { }

  ngOnInit() {
  }

  cambiarProgreso(event: number, tipoProgreso: string){

    if ( tipoProgreso === 'progressBlue'){
      this.valorProgress1 = event;  
    }else{
      this.valorProgress2 = event;
    }
    console.log(event);
    
  }

}
