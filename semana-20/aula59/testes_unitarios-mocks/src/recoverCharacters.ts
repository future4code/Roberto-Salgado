import { Character } from "./validateCharacter";

export const recoverCharacters = (
  characters: Character[],
  validator: (input: Character) => boolean
): Character[] => {

  if (characters.length < 2) {
    throw new Error("Two or more characters must be provided");
  }

  characters.forEach(character => {
    if (!validator(character)) {
      throw new Error("Invalid character");
    }

    character.life = 1500;
  });

  return characters;
}