function agregarTarea() {
  const tareaInput = document.getElementById('tarea');
  const texto = tareaInput.value.trim();
  if (texto === '') return;

  const li = document.createElement('li');
  li.textContent = texto;
  li.addEventListener('click', () => {
    li.remove();
    guardarTareas();
  });

  document.getElementById('lista').appendChild(li);
  tareaInput.value = '';
  guardarTareas();
}

function guardarTareas() {
  const tareas = [];
  document.querySelectorAll('#lista li').forEach(li => {
    tareas.push(li.textContent);
  });
  localStorage.setItem('tareas', JSON.stringify(tareas));
}

function cargarTareas() {
  const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
  tareas.forEach(texto => {
    const li = document.createElement('li');
    li.textContent = texto;
    li.addEventListener('click', () => {
      li.remove();
      guardarTareas();
    });
    document.getElementById('lista').appendChild(li);
  });
}

cargarTareas();
