let grupos = document.getElementById('igrupo')
let artilharia = document.getElementById('artilharia')
let assistencias = document.getElementById('assistencias')
let cartao_amarelo = document.getElementById('cartao-amarelo') 
let espera = document.getElementById('espera') 

function visivel_grupo() {
    grupos.style.display = 'block'
    espera.style.display = 'none'
    artilharia.style.display = 'none'
    assistencias.style.display = 'none'
    cartao_amarelo.style.display = 'none'
}

function visivel_artilharia() {
    artilharia.style.display = 'block'
    espera.style.display = 'none'
    grupos.style.display = 'none'
    assistencias.style.display = 'none'
    cartao_amarelo.style.display = 'none'
}

function visivel_assistencias() {
    assistencias.style.display = 'block'
    espera.style.display = 'none'
    grupos.style.display = 'none'
    artilharia.style.display = 'none'
    cartao_amarelo.style.display = 'none'
}

function visivel_cartoes_amarelos() {
    cartao_amarelo.style.display = 'block'
    espera.style.display = 'none'
    grupos.style.display = 'none'
    artilharia.style.display = 'none'
    assistencias.style.display = 'none'
}

function visivel_cartoes_vermelhos() {

}