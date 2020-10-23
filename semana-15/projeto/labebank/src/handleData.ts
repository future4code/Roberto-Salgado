const currentDate: Date = new Date()

const dateOfBirthAsString: string = "01/04/1970"

const [day, month, year] = dateOfBirthAsString.split("/")

const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)

const ageInMs: number = currentDate.getTime() - dateOfBirth.getTime()

const ageInYears: number = ageInMs/1000/60/60/24/365