const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

const result = (operation, num1, num2) => {
  switch(operation){
    case "add":
      return num1+num2;
      break;
    case "subt":
      return num1-num2;
      break;
    case "mult":
      return num1*num2;
      break;
    case "div":
      return num1/num2;
      break;
    default:
      return "Favor informar todos os parâmetros.";
      break;
  }
}

if(!operation && !num1 && !num2){
  console.log(`Favor passar os parâmetros (Uma operação matemática e dois números).`)
}else if(!num1 && !num2){
  console.log(`Favor passar os números para fazer a operação ${operation}`)
}else if(!num2){
  console.log(`Esperava dois números para fazer a operação ${operation}. Só recebi um.`)
}else{
  console.log("Resposta: "+result(operation, num1, num2));
}