import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tarea } from '../../interfaces/tarea.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  id: number;
  titulo: string;
  prioridad: string;

  @Output() nvaTarea: EventEmitter<Tarea>;

  constructor() { 
    this.id = 0;
    this.titulo = "";
    this.prioridad = "";

    this.nvaTarea = new EventEmitter();
  }

  ngOnInit(): void {
  }

  guardarTarea(){
    // console.log(`${this.titulo} - ${this.prioridad}`);
    // si creas una constante (no let) siempre se vacia
    const nuevaTarea: Tarea = {
      id: this.id,
      title: this.titulo,
      priority: this.prioridad
    }
    this.id++;
    // console.log(nuevaTarea);
    this.nvaTarea.emit(nuevaTarea);
  }
}

