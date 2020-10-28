import { connection } from ".."

export const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection("Actor")
    .insert({
      id,
      name,
      salary,
      birth_date: dateOfBirth,
      gender
    })
}