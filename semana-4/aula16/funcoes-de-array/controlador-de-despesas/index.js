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

    let totalDespesas = despesas.reduce(
      (acumulador, valorAtual) => acumulador + parseInt(valorAtual.valor), 0
    )

    // console.log(totalDespesas)

    filtroDespesas.sort(function (valorA, valorB){
      return (parseInt(valorA.valor) - parseInt(valorB.valor)) * -1
    })

    // console.log(filtroDespesas)

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

// const despesas = [
//   {valor: "30", tipo: "casa", descricao: "Pratos"},
//   {valor: "50", tipo: "casa", descricao: "Pratos"},
//   {valor: "100", tipo: "casa", descricao: "Pratos"},
//   {valor: "20", tipo: "casa", descricao: "Pratos"},
//   {valor: "4", tipo: "casa", descricao: "Pratos"},
//   {valor: "222", tipo: "casa", descricao: "Pratos"}
// ]

// console.log(despesas)

// // const despesasOrganizadas = despesas.sort(function (valorA, valorB){
// //   return Number(valorA.valor) - Number(valorB.valor)
// // })

// // console.log(despesasOrganizadas)

// let despesasSomadas = despesas.reduce(
//   (acumulador, valorAtual) => acumulador + Number(valorAtual.valor), 0
// )

// console.log(despesasSomadas)