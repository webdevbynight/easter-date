import { expect, test } from "vitest";
import getEasterDate from "../src/services/easter-date-calculation.js";

const sample: [number, string][] = [
    [1984, "April 22nd"],
    [2000, "April 23rd"],
    [2001, "April 15th"],
    [2008, "March 23rd"],
    [2018, "April 1st"],
    [2020, "April 12th"],
    [2024, "March 31st"],
    [2030, "April 21st"]
];
for (const sampleItem of sample) {
    const [year, expectedDate] = sampleItem;
    test(`Easter ${year} to fall on ${expectedDate}`, () => {
        expect(getEasterDate(year)).toBe(expectedDate)
    });
}
