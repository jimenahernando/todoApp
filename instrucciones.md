### TODO APP

1. Instalar Bootstrap
    npm install bootstrap
2. Poner la referencia de boostrap en el fichero angular.json para que nuestra app reconozca las lib de boostrap
architecture -> build -> options -> styles
Dentro "node_modules/bootstrap/dist/css/bootstrap.min.css"
SIEMPRE que modifiques el archivo angular.json tenes que parar y reiniciar el servidor, sino los cambios no aplican
3. Maquetado de los componentes con estructura HTML
4. Crear el interface para la gestion del modelo de atarea (id, titulo, prioridad)
5. Crear un array de tareas en el componente principal a iniciarla con las tareas
6. Pintar el array de tareas en el componente listaTareas y asignarle estilos en funcion de la prioridad (INPUT) 
7. Eliminar la tarea, comunicar al padre que tarea queremos que se elimine (OUTPUT).
    a. Capturamos el clic del boton de borrar y enviamos por parametroe el id de la tarea que queremos borrar