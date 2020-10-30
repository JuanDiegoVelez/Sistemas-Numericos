function calcular() {
  var numero = parseInt(document.getElementById("numero").value);
  var base = parseInt(document.getElementById("base").value);
  var division = 0;
  var resto = 0;
  var resultado = "";
  var parar = 0;
  var error = false;

  for (var i = 0; i < document.getElementById("numero").value.length; i++) {
    if (
      isNaN(document.getElementById("numero").value.charAt(i)) ||
      isNaN(document.getElementById("base").value.charAt(i))
    ) {
      error = true;
    }
  }

  while (numero > 0 && parar < 1000) {
    division = Math.trunc(numero / base);
    resto = numero - Math.trunc(numero / base) * base;

    if (base > 10 && resto > 9) {
      var aux = "";

      switch (resto) {
        case 10:
          aux = "A";
          break;
        case 11:
          aux = "B";
          break;
        case 12:
          aux = "C";
          break;
        case 13:
          aux = "D";
          break;
        case 14:
          aux = "E";
          break;
        case 15:
          aux = "F";
          break;
        default:
          aux = "";
          break;
      }

      resultado = aux + resultado + "";
    } else {
      resultado = resto.toString() + resultado;
    }
    numero = division;
    parar++;
  }

  if (error) {
    document.getElementById("resultado").value = "Introduce números entero";
  } else {
    document.getElementById("resultado").value = resultado;
  }
}

function limpiar() {
  document.getElementById("numero").value = "";
  document.getElementById("resultado").value = "";
  document.getElementById("base").value = "2";
}

function calcular2() {
  var numero = document.getElementById("numero_base").value.toUpperCase();
  var base = parseInt(document.getElementById("base_escrito").value);
  var resultado = 0;
  var error = false;

  for (var i = numero.length - 1; i >= 0; i--) {
    var c = numero.charAt(i);
    var n = 0;

    if (base > 1 && c == "0") {
      n = 0;
    } else if (base > 1 && c == "1") {
      n = 1;
    } else if (base > 2 && c == "2") {
      n = 2;
    } else if (base > 3 && c == "3") {
      n = 3;
    } else if (base > 4 && c == "4") {
      n = 4;
    } else if (base > 5 && c == "5") {
      n = 5;
    } else if (base > 6 && c == "6") {
      n = 6;
    } else if (base > 7 && c == "7") {
      n = 7;
    } else if (base > 8 && c == "8") {
      n = 8;
    } else if (base > 9 && c == "9") {
      n = 9;
    } else if (base > 10 && c == "A") {
      n = 10;
    } else if (base > 11 && c == "B") {
      n = 11;
    } else if (base > 12 && c == "C") {
      n = 12;
    } else if (base > 13 && c == "D") {
      n = 13;
    } else if (base > 14 && c == "E") {
      n = 14;
    } else if (base > 15 && c == "F") {
      n = 15;
    } else {
      error = true;
    }

    resultado += n * Math.pow(base, numero.length - 1 - i);
  }

  if (error) {
    document.getElementById("resultado_base").value =
      "Verifique (números invalidos)";
  } else {
    document.getElementById("resultado_base").value = resultado;
  }
}

function limpiar2() {
  document.getElementById("numero_base").value = "";
  document.getElementById("resultado_base").value = "";
  document.getElementById("base_escrito").value = "2";
}
