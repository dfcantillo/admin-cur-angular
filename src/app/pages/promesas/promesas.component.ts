import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { 
    
// una forma
    // promesa.then(
    //   (resultado) => {
    //     console.log('termino promesa');

    // }, (error) => {
    //   console.error('encontro error', error);
    // });

    this.contarTres().then((resultado) => {
      console.log('termino promesa' , resultado);
    }).catch((error) => {
      console.error('Encontro error', error);
    });


  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
   
    return new Promise<boolean>( (resolve, reject) => {
      let contador: number = 0;
     let intervalo = setInterval( () => {
        contador++;
        console.log(contador);
        
        if (contador === 3){
          resolve(true);
          // reject('Simplemente un error de pruebas');
          clearInterval(intervalo);
        }

      }, 1000);

    });

  }

}
