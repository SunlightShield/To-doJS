document.querySelector('#guardar').onclick = function (){
    if(document.querySelector('#ingresado').value.lenght == 0){
        alert("ingrese una tarea");//basicamente, si se detecta que el usuario no ingreso nada, se mostrará esa alerta
        
    }
    else{
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="nombreTarea">
                ${document.querySelector('#ingresado').value}
                </span>
            <button class="borrar">borrar</button>
        </div>`;
        var tareas_disponibles = document.querySelectorAll(".borrar");
        for (var i =0; i < tareas_disponibles.length; i++){
            tareas_disponibles[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
    document.querySelector('#ingresado').value = '';
}
