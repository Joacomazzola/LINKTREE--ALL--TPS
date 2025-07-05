function calcular() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const op = document.getElementById('operacion').value;
  let resultado = '';

  if (op === 'sumar') {
    resultado = num1 + num2;
  } else if (op === 'restar') {
    resultado = num1 - num2;
  } else if (op === 'multiplicar') {
    resultado = num1 * num2;
  } else if (op === 'dividir') {
    resultado = num2 !== 0 ? num1 / num2 : 'No se puede dividir por cero';
  }

  document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}
