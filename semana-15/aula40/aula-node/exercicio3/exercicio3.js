const fs = require('fs');
const colors = require('colors');

const task = process.argv[2];

let tasks = [];

try {
  tasks = JSON.parse(fs.readFileSync('./tasks.js'));
} catch {
  fs.writeFileSync('./tasks.js', JSON.stringify([]));
}

if(!task){
  console.log(`Favor informar nova tarefa.`.red.bgBlack+`\n`);
}else if(tasks.indexOf(task) !== -1){
  console.log(`Tarefa já existente`.black.bgYellow+`\n`);
}else{
  console.log(`Tarefa adicionada com sucesso!`.green+`\n`);
  
  tasks.push(task);
  
  fs.writeFileSync('./tasks.js', JSON.stringify(tasks));
}

if(tasks.length === 0){
  console.log(`tarefas: []`.magenta);
}else if(tasks.length === 1){
  console.log(`tarefas: [\n  ${tasks}\n]`.cyan);
}else{
  for(let i = 0; i < tasks.length; i++) {
    if(i === 0){
      console.log(`tarefas: [\n  ${tasks[i]},`.white);
    }else if(i < tasks.length - 1) {
      console.log(`  ${tasks[i]},`.white);
    }else{
      console.log(`  ${tasks[i]}\n]`.white);
    }
  }
}