enum YEAR_TYPE {
  AC = "AC",
  DC = "DC"
}

const historicAge = (year: number, type: YEAR_TYPE): string => {
  const currentYear = (new Date()).getFullYear()
  let message: string = ""

  if(type === "AC" && year > 4000) {
    message = `Pré-história`
  } else if((type === "AC" && year <= 4000) || (type === "DC" && year < 476)) {
    message = `Idade Antiga`
  } else if(type === "DC" && year >= 476 && year < 1453) {
    message = `Idade Média`
  } else if(type === "DC" && year >= 1453 && year < 1789) {
    message = `Idade Moderna`
  } else if(type === "DC" && year >= 1789 && year < currentYear) {
    message = `Idade Contemporânea`
  } else {
    message = `Favor informar ano anterior ao atual.`
  }

  return message
}

console.log(historicAge(1999, YEAR_TYPE.DC))
console.log(historicAge(10000, YEAR_TYPE.AC))
console.log(historicAge(2000, YEAR_TYPE.AC))
console.log(historicAge(800, YEAR_TYPE.DC))