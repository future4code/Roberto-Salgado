const despesas = []

const valorDespesa = document.getElementById("valor-despesa")
const tipoDespesa = document.getElementById("tipo-despesa")
const descricaoDespesa = document.getElementById("descricao-despesa")

function cadastrarDespesa() {

  if (!valorDespesa.value || tipoDespesa.value === "selecione" || !descricaoDespesa.value) {
    alert("Favor preencher todos os campos")
  } else {

    const cadastroDespesa = {
      valor: valorDespesa.value,
      tipo: tipoDespesa.value,
      descricao: descricaoDespesa.value
    }

    // console.log(cadastroDespesa)

    despesas.push(cadastroDespesa)
    
    // console.log(despesas)

    valorDespesa.value = ""
    tipoDespesa.value = "selecione"
    descricaoDespesa.value = ""
    
  }
  
}

const detalheTipoDespesa = document.getElementById("detalhe-tipo-despesa")
const detalheValorMinimo = document.getElementById("detalhe-valor-minimo")
const detalheValorMaximo = document.getElementById("detalhe-valor-maximo")

const despesasFiltradas = document.getElementById("despesas-filtradas")

const filtrarExtrato = (elemento, index, array) => {
  const numeroValorDespesa = parseInt(elemento.valor)
  const numeroValorMinimo = parseInt(detalheValorMinimo.value)
  const numeroValorMaximo = parseInt(detalheValorMaximo.value)
  if (elemento.tipo === detalheTipoDespesa.value && numeroValorDespesa >= numeroValorMinimo && numeroValorDespesa <= numeroValorMaximo) {
    return true
  }
  return false
}

const inserirExtrato = (elemento, index, array) => {
  const item = document.createElement("div")
  item.className = `despesa`
  item.innerHTML += `<h4>${elemento.tipo}</h4>`
  item.innerHTML += `<p>R$ ${elemento.valor},00</p>`
  despesasFiltradas.insertAdjacentElement ("beforeend", item)
}

function limparExtrato() {
  const extratoAnterior = document.getElementById("despesas-filtradas")
  const totalAnterior = document.getElementById("valor-total")
  if (extratoAnterior && totalAnterior) {
    extratoAnterior.innerHTML = ""
    totalAnterior.innerHTML = ""
  }
}

function filtrarDespesas() {
  if (detalheTipoDespesa.value === "selecione" || !detalheValorMinimo.value  || !detalheValorMaximo.value) {
    alert("Favor preencher todos os campos")
  } else {

    limparExtrato()
    
    const filtroDespesas = despesas.filter(filtrarExtrato)

    let totalDespesas = 0
    filtroDespesas.forEach((despesa, index, array) => {
      totalDespesas += parseInt(despesa.valor)
    })

    filtroDespesas.forEach(inserirExtrato)

      
    const valorTotal = document.getElementById("valor-total")
    valorTotal.innerHTML += ` R$ ${totalDespesas},00`
  }
}

function limparFiltros() {
  detalheTipoDespesa.value = "selecione"
  detalheValorMinimo.value = ""
  detalheValorMaximo.value = ""
}