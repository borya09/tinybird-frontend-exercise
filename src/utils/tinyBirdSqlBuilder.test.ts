import { expect, test, describe } from "vitest";
import { buildDatesWhere } from "./tinyBirdSqlBuilder";

describe("buildDatesWhere", () => {
  test("returns empty where clause with from or to undefined", () => {
    expect(buildDatesWhere("tpep_dropoff_datetime", undefined, undefined)).toBe(
      ""
    );
  });

  test("returns empty where clause with from or to empty", () => {
    expect(buildDatesWhere("tpep_dropoff_datetime", "", "")).toBe("");
  });

  test("returns correct where clause with filled from and empty to", () => {
    expect(buildDatesWhere("tpep_dropoff_datetime", "2017/01/05", "")).toBe(
      "where tpep_dropoff_datetime >= toDate('2017/01/05')"
    );
  });

  test("returns correct where clause with empty from and filled to", () => {
    expect(buildDatesWhere("tpep_dropoff_datetime", "", "2017/10/20")).toBe(
      "where tpep_dropoff_datetime <= toDate('2017/10/20')"
    );
  });

  test("returns correct where clause with filled from and to", () => {
    expect(
      buildDatesWhere("tpep_dropoff_datetime", "2017/01/05", "2017/10/20")
    ).toBe(
      "where tpep_dropoff_datetime >= toDate('2017/01/05') and tpep_dropoff_datetime <= toDate('2017/10/20')"
    );
  });
});
