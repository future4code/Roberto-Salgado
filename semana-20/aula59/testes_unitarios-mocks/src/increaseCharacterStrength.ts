import { Character } from "./validateCharacter";

export const increaseCharacterStrength = (
  character: Character,
  newStrength: number,
  validator: (input: Character) => boolean
): void => {

  if (!validator(character)) {
    throw new Error("Invalid character");
  }

  if (newStrength <= character.strength) {
    throw new Error("New strength must be greater than character strength");
  }

  character.strength = newStrength;

}