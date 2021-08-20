import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/interfaces/tarea.interface';

@Component({
  selector: 'app-listatareas',
  templateUrl: './listatareas.component.html',
  styleUrls: ['./listatareas.component.css']
})
export class ListatareasComponent implements OnInit {

  @Input() tareas: Tarea[];
  @Input() prioridad: string;
  @Input() busqueda: string;
  
  @Output() tareaBorrada: EventEmitter<number>;
  //solo de este componente
  tareasPintadas: Tarea[];

  constructor() { 
    this.tareas = [];
    this.tareaBorrada = new EventEmitter();
    this.prioridad = '';
    this.tareasPintadas = [];
    this.busqueda = '';
  }
 
  ngOnInit(): void {
    // solo captura la primera vez del componente
  }
  
  ngOnChanges(): void{
    // capta los cambios en las propiedad de los componentes
    if(this.prioridad !== ""){
      this.tareasPintadas = this.tareas.filter(tarea => tarea.priority === this.prioridad);
    } else if(this.busqueda !== ""){
      this.tareasPintadas = this.tareas.filter(tarea => tarea.title.toLowerCase().includes(this.busqueda.toLowerCase()));
    } else {
      this.tareasPintadas = this.tareas;
    }
  }  

  borrarTarea(id: number){
    // console.log(id);
    this.tareaBorrada.emit(id);
  }
}
