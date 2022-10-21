//Declara e inicializa contadores e acumuladores (variáveis globais)
let numContas = 0
let valTotal = 0

//Variável string que acumula as contas
let resposta = ''

function registrarConta() {
//Cria referência aos elementos da página manipulados pela function
let inDescricao = document.getElementById('inDescricao')
let inValor = document.getElementById('inValor')
let outListaContas = document.getElementById('outListaContas')
let outTotal = document.getElementById('outTotal')

//Obtem conteúdos dos campos de entrada
let descricao = inDescricao.value.toUpperCase()
let valor = Number(inValor.value.replace('.', ',').replace(',','.'))

//Verifica preenchimento dos campos
if (descricao == '' || valor == 0 || isNaN(valor)) {
  alert('Informe os dados corretamente...')
  inDescricao.focus()
  return
}
//Adiciona valores ao contador e acumulador
  numContas++
  valTotal = valTotal + valor

//Concatena as contas
  resposta = resposta + descricao + ' - R$:' + valor.toFixed(2) + '\n'

//Altera o conteúdo das tags de resposta
  outListaContas.textContent = resposta + '-------------------------------------------'

  outTotal.textContent = numContas + ' Conta(s) - Total R$:' + valTotal.toFixed(2)

//Limpa os campos e posiciona cursor em inDescricao
  inDescricao.value = ''
  inValor.value =  ''
  inDescricao.focus()
}
//Referencia elemento e após associa function ao evento click
let btRegistrar = document.getElementById('btRegistrar')
btRegistrar.addEventListener('click', registrarConta)

