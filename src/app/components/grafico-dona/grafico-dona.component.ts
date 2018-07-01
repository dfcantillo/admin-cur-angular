import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

    // Doughnut
   @Input('labelGraficaDona')    doughnutChartLabels: string[];
   @Input('dataGraficaDona')   doughnutChartData: number[];
   @Input('tipoGrafica')  doughnutChartType: string = '';
   @Input('TituloGrafica') titleChar: string =  '';

  constructor() { }

  ngOnInit() {
  }

}
