const diasContainerDOM = document.querySelector('#days')
const horasContainerDOM = document.querySelector('#hours')
const minutosContainerDOM = document.querySelector('#minutes')
const segundosContainerDOM = document.querySelector('#seconds')
const proximoAnoContainerDOM = document.querySelector('#year')
const carregaSpinner = document.querySelector('#loading')
const contagemRegressiva = document.querySelector('#countdown')


const proximoAno = new Date().getFullYear() + 1
const novoAno = new Date(`janeiro 02 ${proximoAno} 03:02:41`)

proximoAnoContainerDOM.textContent = proximoAno

const pegarTempoComoParametro = unidade => unidade < 10 ? '0' + unidade : unidade

const inserirValoresContador = ({dias, horas, minutos, segundos}) => {
  segundosContainerDOM.textContent = pegarTempoComoParametro(segundos)
  minutosContainerDOM.textContent = pegarTempoComoParametro(minutos)
  horasContainerDOM.textContent = pegarTempoComoParametro(horas)
  diasContainerDOM.textContent = pegarTempoComoParametro(dias)
}

const atualizaContador = () => {
  const horaAtual = new Date()
  const diferenca = novoAno - horaAtual 
  const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24)
  const horas = Math.floor(diferenca / 1000 / 60 / 60) % 24
  const minutos = Math.floor(diferenca / 1000 / 60 ) % 60
  const segundos = Math.floor(diferenca / 1000) % 60
  
  inserirValoresContador({ dias, horas, minutos, segundos })
}

const telaContagemRegressiva = () => {
  contagemRegressiva.style.display = 'flex'
  carregaSpinner.remove()  

}

setTimeout(telaContagemRegressiva, 1000);

setInterval(() => {
  atualizaContador() 
}, 1000);