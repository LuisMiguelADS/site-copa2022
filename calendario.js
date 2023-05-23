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

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('visivel-btn')) {
      espera.style.display = 'none';
      exibirElementoPorData(event.target.dataset.data);
    }
});

