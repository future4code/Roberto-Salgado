export const getAge = (dateStr: string): number => {
  const currentDate: Date = new Date()
  const [day, month, year] = dateStr.split("/")
  const date: Date = new Date(`${year}-${month}-${day}`)
  const ageInMs: number = currentDate.getTime() - date.getTime()
  const ageInYears: number = ageInMs/1000/60/60/24/365
  return ageInYears
}