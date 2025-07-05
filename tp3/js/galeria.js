const imagenes = document.querySelectorAll('#galeria img');

imagenes.forEach(img => {
  img.addEventListener('click', () => {
    if (img.style.transform === 'scale(1.5)') {
      img.style.transform = 'scale(1)';
      img.style.zIndex = '0';
    } else {
      img.style.transform = 'scale(1.5)';
      img.style.zIndex = '10';
    }
  });
});
