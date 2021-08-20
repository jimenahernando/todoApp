import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  // para busqueda con combo
  @Output() prioridadEnviada: EventEmitter<string>;

  // para busqueda a medida que escribo
  @Output() busquedaEnviada: EventEmitter<string>;

  constructor() {
    this.prioridadEnviada = new EventEmitter();
    this.busquedaEnviada = new EventEmitter();
   }

  ngOnInit(): void {
  }

  filtrarPrioridad($event: any){
      // console.log($event.target.value);
    this.prioridadEnviada.emit($event.target.value);
  }

  capturarBusqueda($event:any){
    // console.log($event.target.value);
    this.busquedaEnviada.emit($event.target.value);
  }
}
