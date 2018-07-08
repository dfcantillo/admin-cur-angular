import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable,  Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() { 
    
   

    this.subscription =  this.regresaObservable().pipe(
      retry(3)
    ).subscribe( 
      numero => console.log('subscripción observable ', numero),
      error => console.error('subscripción observable ', error),
      () => console.log('Proceso Terminado')
    );
  
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    console.log('Se cerro la pagina');
    this.subscription.unsubscribe();
    
  }


  regresaObservable(): Observable<any> {
    let obs: Observable<any> = new Observable(observer => {
 
      let contador = 0;
      let intervalo = setInterval(() => {
        contador++;


        let objeto = { valor : contador};


        observer.next(objeto);
        
        // if (contador === 3){
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // if ( contador === 2){
        //   clearInterval(intervalo);
        //   observer.error('Auxilio');
        // }

      }, 1000);
    }).pipe(
      map((resp: any) => {
        return resp.valor;
      }),
      filter((valor , index) => {
        if ( (valor % 2 === 0) ){
          // Número par no interesa
          return false;
        }else{
          // Número impar interesa
          
          return true;
        }
        console.log('Filter' , valor , index);
        
      })
    );

    return obs;


  }

}
