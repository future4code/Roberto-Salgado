import { Character } from "./validateCharacter";

export const decreaseCharacterDefense = (
  character: Character,
  newDefense: number,
  validator: (input: Character) => boolean
): void => {

  if (!validator(character)) {
    throw new Error("Invalid character");
  }

  if (newDefense > character.defense) {
    throw new Error("New defense must be lesser than character defense");
  } else if (newDefense < character.defense) {
    character.defense = newDefense;
  }

}