function criarTarefa() {
  const inputTarefa = document.getElementById("tarefa")
  let novaTarefa = inputTarefa.value
  
  if (novaTarefa !== "") {
    let diaSemana = document.getElementById("dias-semana").value
    const tarefaAFazer = document.getElementById(diaSemana)
    const horaTarefa = document.getElementById("hora-tarefa").value
    tarefaAFazer.innerHTML += `<li class='tarefa-a-fazer' onclick='riscarTarefa(this)'>${horaTarefa}h: ${novaTarefa}</li>`
    inputTarefa.value = ""
  } else {
    alert(`Campo tarefa não pode ser vazio.\nPor favor, digite uma tarefa!`)
  }
}

function riscarTarefa(tarefa) {
  if (tarefa.className === "tarefa-a-fazer") {
    tarefa.className = "tarefa-feita"
  } else if (tarefa.className === "tarefa-feita") {
    tarefa.className = "tarefa-a-fazer"
  }
}

function limparTarefas() {  
  const listaTarefasAFazer = document.getElementsByClassName("tarefa-a-fazer")
  const listaTarefasFeitas = document.getElementsByClassName("tarefa-feita")
  for (let i = listaTarefasAFazer.length - 1; i >= 0 ; i--) {
    listaTarefasAFazer[i].remove()
  }
  for (let i = listaTarefasFeitas.length - 1; i >= 0 ; i--) {
    listaTarefasFeitas[i].remove()
  }
}