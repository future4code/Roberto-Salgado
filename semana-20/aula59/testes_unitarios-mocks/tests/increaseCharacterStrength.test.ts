import { increaseCharacterStrength } from "../src/increaseCharacterStrength";
import { Character } from "../src/validateCharacter";

describe("Testing Increase Character Strength", ()=>{
  test("Should return invalid character error", ()=>{
    expect.assertions(4);
    
    const validatorMock = jest.fn(()=>{
      return false
    });

    const character: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const newStrength: number = 800;

    try {
      increaseCharacterStrength(character, newStrength, validatorMock);
    } catch (error) {
      expect(error.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
  
  test("Should return invalid strength error for new strength lesser than character strength", ()=>{
    expect.assertions(4);
    
    const validatorMock = jest.fn(()=>{
      return true
    });

    const character: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const newStrength: number = 400;

    try {
      increaseCharacterStrength(character, newStrength, validatorMock);
    } catch (error) {
      expect(error.message).toBe("New strength must be greater than character strength");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
  
  test("Should return invalid strength error for new strength equal to character strength", ()=>{
    expect.assertions(4);
    
    const validatorMock = jest.fn(()=>{
      return true
    });

    const character: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const newStrength: number = 600;

    try {
      increaseCharacterStrength(character, newStrength, validatorMock);
    } catch (error) {
      expect(error.message).toBe("New strength must be greater than character strength");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
  
  test("Should set character new strength", ()=>{
    expect.assertions(4);
    
    const validatorMock = jest.fn(()=>{
      return true
    });

    const character: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const newStrength: number = 800;

    increaseCharacterStrength(character, newStrength, validatorMock);

    expect(character.strength).toEqual(newStrength);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(1);
    expect(validatorMock).toHaveReturnedTimes(1);
  });
});