import { genderMock, statusMock, sortAZMock, sortZAMock} from "../src/data/rickandmorty/rickandmortyMock.js";
import { filterGender, filterStatus, sortDe, sortAs } from "../src/data.js";

const statusM = statusMock;
const genderM = genderMock;

describe("testing filter by gender", () => {
  it("should be a function", () => {
    expect(typeof filterGender).toBe("function");
  });

  it("should contain a female", () => {
    const result = filterGender(genderM, "Female");
    expect(result).toContain(genderM[0]);
  });

  it("should have a genderless character", () => {
    const result = filterGender(genderM, "Genderless");
    expect(result).toContain(genderM[3]);
  });

  it("is not undefinded", () => {
    const result = filterGender(genderM, "Male", true, genderM);
    expect(result).not.toBeUndefined();
  });
}),

describe("testing filter by status", () => {
  it("should be a function", () => {
    expect(typeof filterStatus).toBe("function");
  });

  it("is not Null", () => {
    const result = filterStatus(statusM, "Dead", true, statusM);
    expect(result).not.toBeNull();
  });

  it("return only unknown characters", () => {
    expect(filterStatus(statusM, "unknown")).toHaveLength(2);
  });

  
  it('return only dead characters', () => {
    expect(filterStatus(statusMock, "Dead")).toContain(statusMock[2]);
  });
}),

describe("mix filter test", () => {
  it('should filter by gender and status" ', () => {
    const filter1 = filterGender(statusMock, "Male");

    expect(filterStatus(filter1, "unknown")).toHaveLength(1);
  });

  it('should filter by status and gender ', () => {
    const filter1 = filterStatus(statusMock, "Alive");

    expect(filterGender(filter1, "Female")).toHaveLength(1);
  });
}),

describe("testing sort", () => {
    it("should be a function", () => {
    expect(typeof sortDe).toBe("function");
  });

  it("should be a function", () => {
    expect(typeof sortAs).toBe("function");
  });

  it("should sort by A to Z", () => {
    expect(sortAs(statusMock)).toEqual(sortAZMock);
  });

  it("should sort by Z to A", () => {
    expect(sortDe(statusMock)).toEqual(sortZAMock);
  });
});
