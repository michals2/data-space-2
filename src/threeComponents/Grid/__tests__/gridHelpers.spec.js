import { createGrid } from "../gridHelpers";

describe("gridHelpers", () => {
  describe("createGrid", () => {
    it("creates a grid of the correct shape", () => {
      const shape = [4, 7];
      const grid = createGrid({ shape });
      expect(grid.size).toBe(shape[0]);
      grid.forEach(col => expect(col.size).toBe(shape[1]));
    });
  });
});
