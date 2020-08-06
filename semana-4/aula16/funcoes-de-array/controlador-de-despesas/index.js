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

    console.log(cadastroDespesa)

    despesas.push(cadastroDespesa)
    
    console.log(despesas)
    
    valorDespesa.value = ""
    tipoDespesa.value = "selecione"
    descricaoDespesa.value = ""
    
  }
  
}

const detalheTipoDespesa = document.getElementById("detalhe-tipo-despesa")
const detalheValorMinimo = document.getElementById("detalhe-valor-minimo")
const detalheValorMaximo = document.getElementById("detalhe-valor-maximo")

const extratoDespesas = document.getElementById("extrato-despesas")

const filtrarExtrato = (elemento, index, array) => {
  if (elemento.tipo === detalheTipoDespesa.value) {
    return true
  }
  return false
}

const inserirExtrato = (elemento, index, array) => {
  const item = document.createElement("div")
  item.className = `despesa`
  item.innerHTML += `<h4>${elemento.tipo}</h4>`
  item.innerHTML += `<p>R$ ${elemento.valor}</p>`
  extratoDespesas.insertAdjacentElement ("beforeend", item)
}

function filtrarDespesas() {

  if (detalheTipoDespesa.value === "selecione" || !detalheValorMinimo.value  || !detalheValorMaximo.value) {
    alert("Favor preencher todos os campos")
  } else {

    const filtroDespesas = despesas.filter(filtrarExtrato)

    filtroDespesas.forEach(inserirExtrato)

  }
  

}

function limparFiltros() {
  detalheTipoDespesa.value = "selecione"
  detalheValorMinimo.value = ""
  detalheValorMaximo.value = ""
}