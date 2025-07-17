function calcular() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operacion = document.getElementById('operacion').value;
  const resultado = document.getElementById('resultado');

  if (operacion === 'raiz') {
    if (isNaN(num1) || num1 < 0) {
      resultado.textContent = 'Ingresa un número válido y positivo para la raíz';
      return;
    }
    resultado.textContent = `√${num1} = ${Math.sqrt(num1).toFixed(4)}`;
    return;
  }

  if (operacion === 'porcentaje') {
    if (isNaN(num1) || isNaN(num2)) {
      resultado.textContent = 'Ingresa ambos números para calcular el porcentaje';
      return;
    }
    resultado.textContent = `${num1}% de ${num2} = ${(num1 / 100 * num2).toFixed(4)}`;
    return;
  }

  if (isNaN(num1) || isNaN(num2)) {
    resultado.textContent = 'Ingresa ambos números';
    return;
  }

  let res;
  switch (operacion) {
    case 'sumar':
      res = num1 + num2;
      break;
    case 'restar':
      res = num1 - num2;
      break;
    case 'multiplicar':
      res = num1 * num2;
      break;
    case 'dividir':
      if (num2 === 0) {
        resultado.textContent = 'No se puede dividir por cero';
        return;
      }
      res = num1 / num2;
      break;
    default:
      resultado.textContent = 'Operación no válida';
      return;
  }
  resultado.textContent = `Resultado: ${res.toFixed(4)}`;
}
