const tasksArray = [
  "Fazer almoço",
  "Ir ao mercado",
  "Comprar botão da descarga"
];
const task = process.argv[2];

tasksArray.push(task);

console.log("Tarefa adicionada com sucesso!\n\ntarefas: [");
for(let i = 0; i < tasksArray.length; i++) {
  if(i < tasksArray.length - 1) {
    console.log(`  ${tasksArray[i]},`)
  }else{
    console.log(`  ${tasksArray[i]}\n]`)
  }
}