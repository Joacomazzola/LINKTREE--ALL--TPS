const imagenes = document.querySelectorAll('.imagen-galeria img');

imagenes.forEach(img => {
  img.addEventListener('click', () => {
    img.classList.toggle('zoomed');
  });
});
