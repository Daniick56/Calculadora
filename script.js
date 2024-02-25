// Función para sumar dos números
function sumar(num1, num2) {
  return num1 + num2;
}

//funcion para restar dos números
function restar(num1, num2) {
  return num1 - num2;
}

//funcion multiplicar dos numeros
function multiplicar(num1, num2) {
  return num1 * num2;
}

//funcion dividir dos numeros
function dividir(num1, num2) {
  return num1 / num2;
}

//funcion factorial de un numero
function factorial(num1) {
  var resultado = 1;

  for (var i = 1; i <= num1; i++) {
      resultado *= i;
  }

  return resultado;
}

//funcion exponente de un numero
function calcularExponente(base, exponente) {
  return base ** exponente;
}

//funcion que retorna la raiz cuandrada de un numero
function raizCuadrada(num1) {
  return num1 ** 0.5;
}

// Función principal del programa
function calculadora() {
  var opcion = prompt("Elija una opción:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Factorial\n6. Exponente\n7. Raíz cuadrada");
  var num1 = parseFloat(prompt("Ingrese el primer número:"));
  var num2;
  var resultado;

  if (opcion !== "5" && opcion !== "7") {
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
  }

  switch (opcion) {
    case "1":
      resultado = sumar(num1, num2);
      break;
    case "2":
      resultado = restar(num1, num2);
      break;
    case "3":
      resultado = multiplicar(num1, num2);
      break;
    case "4":
      resultado = dividir(num1, num2);
      break;
    case "5":
      resultado = factorial(num1);
      break;
    case "6":
      var exponente = parseFloat(prompt("Ingrese el exponente:"));
      resultado = exponente(base, exponente);
      break;
    case "7":
      resultado = raizCuadrada(num1);
      break;
    default:
      resultado = "Opción no válida";
      break;
  }

  alert("El resultado es: " + resultado);
}

// Llamar a la función principal
calculadora();