const num1: number = Number(process.argv[2])
const num2: number = Number(process.argv[3])

function operations(num1: number, num2: number): void {
  if(!num1 && !num2) {
    console.log(`Favor informar dois números`)
  } else if(!num2) {
    console.log(`Esperava dois parametros mas recebi apenas um.`)
  } else {
    console.log(`Soma: ${num1 + num2}`)
    console.log(`Subtração: ${Math.abs(num1 - num2)}`)
    console.log(`Multiplicação: ${num1 * num2}`)
    if(num1 > num2) {
      console.log(`O maior número é: ${num1}`)
    } else if(num2 > num1) {
      console.log(`O maior número é: ${num2}`)
    } else {
      console.log(`Os números são iguais`)
    }
  }
}

operations(num1, num2)