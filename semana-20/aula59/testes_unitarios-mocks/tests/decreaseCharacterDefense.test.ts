import { decreaseCharacterDefense } from "../src/decreaseCharacterDefense";
import { Character } from "../src/validateCharacter";

describe("Testing decrease Character Defense", ()=>{
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

    const newDefense: number = 100;

    try {
      decreaseCharacterDefense(character, newDefense, validatorMock);
    } catch (error) {
      expect(error.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
  
  test("Should return invalid defense error for new defense greater than character defense", ()=>{
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

    const newDefense: number = 300;

    try {
      decreaseCharacterDefense(character, newDefense, validatorMock);
    } catch (error) {
      expect(error.message).toBe("New defense must be lesser than character defense");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
  
  test("Should keep character defense for an equal new defense", ()=>{
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

    const newDefense: number = 200;

    decreaseCharacterDefense(character, newDefense, validatorMock);
    
    expect(character.defense).toEqual(newDefense);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveReturnedTimes(1);
    expect(validatorMock).toHaveBeenCalledTimes(1);
  });
  
  test("Should set character new defense for a lesser new defense", ()=>{
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

    const newDefense: number = 100;

    decreaseCharacterDefense(character, newDefense, validatorMock);

    expect(character.defense).toEqual(newDefense);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(1);
    expect(validatorMock).toHaveReturnedTimes(1);
  });
});