import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string;
  constructor(private _router: Router ,
     private title: Title
    , private meta: Meta) {

   
    this.getDataOfRouter().subscribe((evento: any) => {
      this.titulo = evento.titulo;
      this.title.setTitle(this.titulo);
      
      const metaTaga: MetaDefinition = {
        name: 'descripcion',
        content : this.titulo
      };

      this.meta.updateTag(metaTaga);
    });

   }


  ngOnInit() {
  }

  getDataOfRouter(): Observable<object> {

    return this._router.events
    .pipe(
      filter(eventos => {
          if ( (eventos  instanceof ActivationEnd)) {
            if (eventos.snapshot.data.titulo){
              return true; // se filtra solo lo necesario se puede realizar varios filtros consecutivos
            }
           
           }
      }),
      map((evento: ActivationEnd ) => {
        return evento.snapshot.data; // se retorna el valor final despues que se termina el filtro
      })
    );

  }

}
