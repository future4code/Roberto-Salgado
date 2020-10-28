import { connection } from "..";

export const updateSalary = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({salary})
    .where("id", id);
};