import {Character} from "../src/model/Character";
import {validateCharacter} from "../src/validateCharacter";

describe("validateCharacter Test", () => {
    test("Should return false for empty name", () => {
        const resp:Character = {
        name: "",
        life: 1500,
        strength: 300,
        defense: 500,
        };

        const result = validateCharacter(resp);
        expect(result).toBeFalsy();
})

test("Should return true for life 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  })


