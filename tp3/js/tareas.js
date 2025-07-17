document.addEventListener("DOMContentLoaded", cargarTareas);

function agregarTarea() {
  const input = document.getElementById("tarea");
  const texto = input.value.trim();

  if (texto === "") return;

  const tareas = obtenerTareasDeStorage();
  tareas.push(texto);
  guardarTareasEnStorage(tareas);

  input.value = "";
  mostrarTareas();
}
function obtenerTareasDeStorage() {
  const guardadas = localStorage.getItem("tareas");
  return guardadas ? JSON.parse(guardadas) : [];
}

function guardarTareasEnStorage(tareas) {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function mostrarTareas() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  const tareas = obtenerTareasDeStorage();
  tareas.forEach((tarea, index) => {
    const li = document.createElement("li");
    li.textContent = tarea;
    li.style.marginBottom = "10px";

    const btn = document.createElement("button");
    btn.textContent = "Eliminar";
    btn.style.marginLeft = "10px";
    btn.style.backgroundColor = "#e53935";
    btn.style.color = "#fff";
    btn.style.border = "none";
    btn.style.borderRadius = "4px";
    btn.style.cursor = "pointer";
    btn.onclick = () => eliminarTarea(index);

    li.appendChild(btn);
    lista.appendChild(li);
  });
}
function eliminarTarea(indice) {
  const tareas = obtenerTareasDeStorage();
  tareas.splice(indice, 1);
  guardarTareasEnStorage(tareas);
  mostrarTareas();
}

function cargarTareas() {
  mostrarTareas();

}
