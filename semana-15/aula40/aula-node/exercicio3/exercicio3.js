// const colors = require('colors');

const tasksArray = [
  "Fazer almoço",
  "Ir ao mercado",
  "Comprar botão da descarga"
];
const task = process.argv[2];

tasksArray.push(task);

if(!task){
  console.log(`Favor informar nova tarefa.`)
}else{
  for(let i = 0; i < tasksArray.length; i++) {
    if(i === 0){
      console.log(`Tarefa adicionada com sucesso!\n\ntarefas: [\n  ${tasksArray[i]},`);
    }else if(i < tasksArray.length - 1) {
      console.log(`  ${tasksArray[i]},`);
    }else{
      console.log(`  ${tasksArray[i]}\n]`);
    }
  }
}