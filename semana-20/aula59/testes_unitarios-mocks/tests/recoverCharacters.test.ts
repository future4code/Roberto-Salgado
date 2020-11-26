import { recoverCharacters } from "../src/recoverCharacters";
import { Character } from "../src/validateCharacter";

describe("Testing Recover Characters", ()=>{
  test("Should return invalid character error", ()=>{
    expect.assertions(4);
    
    const validatorMock = jest.fn(()=>{
      return false
    });

    const characters: Character[] = [
      {
        name: "Scorpion",
        life: 300,
        defense: 200,
        strength: 600,
      },
      {
        name: "Sub-Zero",
        life: 200,
        defense: 600,
        strength: 200,
      }
    ];

    try {
      recoverCharacters(characters, validatorMock);
    } catch (error) {
      expect(error.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });

  test("Should return less than two characters error", ()=>{
    expect.assertions(2);
    
    const validatorMock = jest.fn(()=>{
      return false
    });

    const characters: Character[] = [
      {
        name: "Scorpion",
        life: 300,
        defense: 200,
        strength: 600,
      }
    ];

    try {
      recoverCharacters(characters, validatorMock);
    } catch (error) {
      expect(error.message).toBe("Two or more characters must be provided");
      expect(validatorMock).not.toHaveBeenCalled();
    }
  });

  test("Should return two characters with full life (1500)", ()=>{
    expect.assertions(5);
    
    const validatorMock = jest.fn(()=>{
      return true
    });

    const characters: Character[] = [
      {
        name: "Scorpion",
        life: 300,
        defense: 200,
        strength: 600,
      },
      {
        name: "Sub-Zero",
        life: 200,
        defense: 600,
        strength: 200,
      }
    ];

    recoverCharacters(characters, validatorMock);

    expect(characters[0].life).toEqual(1500);
    expect(characters[1].life).toEqual(1500);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

  test("Should return more than two characters with full life (1500)", ()=>{
    expect.assertions(9);
    
    const validatorMock = jest.fn(()=>{
      return true
    });

    const characters: Character[] = [
      {
        name: "Scorpion",
        life: 300,
        defense: 200,
        strength: 600,
      },
      {
        name: "Sub-Zero",
        life: 200,
        defense: 600,
        strength: 200,
      },
      {
        name: "Johnny Cage",
        life: 200,
        defense: 400,
        strength: 400
      },
      {
        name: "Liu Kang",
        life: 200,
        defense: 400,
        strength: 400
      },
      {
        name: "Kung Lao",
        life: 200,
        defense: 400,
        strength: 400
      }
    ];

    recoverCharacters(characters, validatorMock);

    characters.forEach(character => {
      expect(character.life).toEqual(1500);
    });
    expect(characters.length).toEqual(5);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(5);
    expect(validatorMock).toHaveReturnedTimes(5);
  });
});