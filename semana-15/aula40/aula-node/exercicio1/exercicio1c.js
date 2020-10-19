const name = process.argv[2]
const age = process.argv[3]
const ageInSevenYears = Number(age)+7

if(!name && !age){
  console.log("Favor inserir seu nome e sua idade")
}else if(!age){
  console.log("Olá, "+name+"! Favor inserir sua idade")
}else{
  console.log("Olá, "+name+"! Você tem "+age+" anos. Em sete anos você terá "+ageInSevenYears+".")
}