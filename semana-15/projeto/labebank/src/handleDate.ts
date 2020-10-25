export const currentDate: Date = new Date()

export const currentDateStr: string = currentDate.toLocaleDateString('pt-BR')

export const getTimeStamp = (dateStr: string): number => {
  const [day, month, year] = dateStr.split("/")
  const date: Date = new Date(`${year}-${month}-${day}`)
  return date.getTime()
}

export const getAge = (dateStr: string): number => {
  const ageInMs: number = currentDate.getTime() - getTimeStamp(dateStr)
  const ageInYears: number = ageInMs/1000/60/60/24/365
  return ageInYears
}