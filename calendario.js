const elementos = [
    'dia-20-11', 'dia-21-11', 'dia-22-11', 'dia-23-11', 'dia-24-11',
    'dia-25-11', 'dia-26-11', 'dia-27-11', 'dia-28-11', 'dia-29-11',
    'dia-30-11', 'dia-01-12', 'dia-02-12', 'dia-03-12', 'dia-04-12',
    'dia-05-12', 'dia-06-12', 'dia-09-12', 'dia-10-12', 'dia-13-12',
    'dia-14-12', 'dia-17-12', 'dia-18-12'
  ];

function exibirElemento(elemento) {
    const elementoHTML = document.getElementById(elemento);
    elementoHTML.style.display = 'block';
}

function ocultarElemento(elemento) {
    const elementoHTML = document.getElementById(elemento);
    elementoHTML.style.display = 'none';
}

function exibirElementoPorData(data) {
    for (let x = 0; x < elementos.length; x++) {
      if (elementos[x] === data) {
        exibirElemento(elementos[x]);
      } else {
        ocultarElemento(elementos[x]);
      }
    }
}

document.getElementById('visivel_20_11').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-20-11');
})
document.getElementById('visivel_21_11').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-21-11');
})
document.getElementById('visivel_22_11').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-22-11');
})
document.getElementById('visivel_23_11').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-23-11');
})
document.getElementById('visivel_24_11').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-24-11');
})
document.getElementById('visivel_25_11').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-25-11');
})
document.getElementById('visivel_26_11').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-26-11');
})
document.getElementById('visivel_27_11').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-27-11');
})
document.getElementById('visivel_28_11').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-28-11');
})
document.getElementById('visivel_29_11').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-29-11');
})
document.getElementById('visivel_30_11').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-30-11');
})
document.getElementById('visivel_01_12').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-01-12');
})
document.getElementById('visivel_02_12').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-02-12');
})
document.getElementById('visivel_03_12').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-03-12');
})
document.getElementById('visivel_04_12').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-04-12');
})
document.getElementById('visivel_05_12').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-05-12');
})
document.getElementById('visivel_06_12').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-06-12');
})
document.getElementById('visivel_09_12').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-09-12');
})
document.getElementById('visivel_10_12').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-10-12');
})
document.getElementById('visivel_13_12').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-13-12');
})
document.getElementById('visivel_14_12').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-14-12');
})
document.getElementById('visivel_17_12').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-17-12');
})
document.getElementById('visivel_18_12').addEventListener('click', function() {
    espera.style.display = 'none'
    exibirElementoPorData('dia-18-12');
})

