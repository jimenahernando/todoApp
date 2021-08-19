import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/interfaces/tarea.interface';

@Component({
  selector: 'app-listatareas',
  templateUrl: './listatareas.component.html',
  styleUrls: ['./listatareas.component.css']
})
export class ListatareasComponent implements OnInit {

  @Input() tareas: Tarea[];
  @Output() tareaBorrada: EventEmitter<number>;
  constructor() { 
    this.tareas = [];
    this.tareaBorrada = new EventEmitter();
  }

  ngOnInit(): void {
    console.log(this.tareas);
  }

  borrarTarea(id: number){
    // console.log(id);
    this.tareaBorrada.emit(id);
  }
}
