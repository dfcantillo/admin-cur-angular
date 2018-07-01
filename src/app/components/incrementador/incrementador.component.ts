import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

 @Input()  valorProgress: number = 50;
  @Input('textoLeyenda') leyenda: string = 'Leyenda';
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  mensaje: string = 'mensaje inicio';
  mostrarMensaje: boolean = false;



  constructor() { 
    // console.log('Leyenda', this.leyenda );
    console.log('Progreso', this.valorProgress );
  }

  ngOnInit() {
    // console.log('Leyenda', this.leyenda );
    console.log('Progreso', this.valorProgress );
  }

  cambiarValor(valor: number){
    if (  this.valorProgress < 0){
      this.mostrarMensaje = true;
      this.valorProgress = 0;
      this.mensaje = 'El progreso no puede ser menor a 0 (cero)';
      return;
    }
    if (  this.valorProgress > 100){
      this.mostrarMensaje = true;
      this.valorProgress = 100;
      this.mensaje = 'el progreso no puede ser mayor a 100 (cien)';
      return;
    }
    this.valorProgress += valor;
    this.cambioValor.emit(this.valorProgress);

    setTimeout(() => {
      this.mostrarMensaje = false;
    }, 1000);
  }



}
