function criarTarefa() {
  const inputTarefa = document.getElementById("tarefa")
  let novaTarefa = inputTarefa.value
  
  if (novaTarefa !== "") {
    let diaSemana = document.getElementById("dias-semana").value
    // console.log(novaTarefa, diaSemana)
    const listaTarefas = document.getElementById(diaSemana)
    listaTarefas.innerHTML += `<li class='tarefa-a-fazer' onclick='riscarTarefa(this)'>${novaTarefa}</li>`
    inputTarefa.value = ""
  } else {
    alert("Campo tarefa não pode ser vazio.\nPor favor, digite uma tarefa!")
  }
}

function riscarTarefa(tarefa) {
  if (tarefa.className === "tarefa-a-fazer") {
    tarefa.className = "tarefa-feita"
  } else if (tarefa.className === "tarefa-feita") {
    tarefa.className = "tarefa-a-fazer"
  }
}