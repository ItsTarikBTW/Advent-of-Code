import { partOne,partTwo } from "./script";

describe("Day One", () => {
  it("Part1 : test case = 142", () => {
    expect(partOne("2023/DAY1/example1.txt")).toBe(142);
  });
  it("Part2 : test case = 142", () => {
    expect(partTwo("2023/DAY1/example2.txt")).toBe(209);//281
  });

});
