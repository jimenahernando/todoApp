import { Component } from '@angular/core';
import { Tarea } from './interfaces/tarea.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';

  arrTareas : Tarea[];

  // para las busquedas
  prioridad: string;
  busqueda: string;

  constructor(){
    this.arrTareas = [
      { 
        id: 1, 
        title: 'Estudiar Agular', 
        priority: 'urgente'
      },
      { 
        id: 2, 
        title: 'Sacar al perro', 
        priority: 'diaria'
      },
      { 
        id: 3, 
        title: 'Leer libro', 
        priority: 'mensual'
      },
      { 
        id: 4, 
        title: 'Comer helado', 
        priority: 'urgente'
      },
    ] ;
    this.prioridad = '';
    this.busqueda = '';
  }

  onDeleteTarea($event: any){
    // console.log($event);
    this.arrTareas = this.arrTareas.filter(tarea =>{
      return tarea.id !== $event;
    });
    // console.log(this.arrTareas); 
  }

  onGuardarTarea($event: Tarea){
    // console.log($event);  
    this.arrTareas.push($event);
  }

  onFiltrarPrioridad($event: string){
    // console.log($event);
    this.prioridad = $event;  
  }

  onBusqueda($event: string){
    this.busqueda = $event;
  }
}
