//fecha infos
var diaNumero = document.getElementById('diaNumero')
var mesNombre = document.getElementById('mesNombre')
var añoNumero = document.getElementById('añoNumero')
var dateText = document.getElementById('dateText')

//contenedor de tareas
const contenedorTarea = document.getElementById('tareas-caja')

const setDate = () => {
    const date = new Date();
    diaNumero.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    mesNombre.textContent = date.toLocaleString('es', { month: 'short' });
    añoNumero.textContent = date.toLocaleString('es', { year: 'numeric' });
};

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    contenedorTarea.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const toDo = [];
    contenedorTarea.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}

const ordenarTareas = () => {
    order().forEach(el => contenedorTarea.appendChild(el))
}

setDate();