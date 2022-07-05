import { detectLanguage } from "../src/detectLanguage";

describe("detect language correctly", () => {
  it("should return pinglish", () => {
    expect(detectLanguage("abcdefghijklmnopqrstuvwxyz")).toBe("pinglish");
  });
  it("should return persian", () => {
    expect(detectLanguage("ابتدا بیستان بیستان")).toBe("persian");
  });
  it("should return persian-pinglish", () => {
    expect(detectLanguage("ابتداsdasd adasd asd بیستان بیستان")).toBe(
      "persian-pinglish"
    );
  });
});
