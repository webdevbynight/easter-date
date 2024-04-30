type OrdinalSuffix = Exclude<Intl.LDMLPluralRule, "zero" | "many">;

/**
 * Get the ordinal of a day.
 *
 * @param {Number} day - The day.
 * @returns {String} The day with the matching ordinal.
 */
const getOrdinal = (day: number): string => {
    const ordinalRules = new Intl.PluralRules("en-GB", { type: "ordinal" });
    const suffixes: Record<OrdinalSuffix, string> = {
        one: "st",
        two: "nd",
        few: "rd",
        other: "th"
    };
    const rule = ordinalRules.select(day) as OrdinalSuffix;
    return `${day}${suffixes[rule]}`;
};

/**
 * Gets the date of Easter according to Butcher’s and Meeus’s algorithm.
 *
 * @see https://en.wikipedia.org/wiki/Date_of_Easter#Anonymous_Gregorian_algorithm
 * @param {Number} year - The concerned year.
 * @returns {String} The date of Easter in the concerned year.
 */
const getEasterDate = (year: number): string => {
    const metonicCycle = 19;
    const yearRankInMetonicCycle = year % metonicCycle;
    const hundreds = Math.floor(year / 100);
    const yearRankPerHundreds = year % 100;
    const bissextileCentury = Math.floor(hundreds / 4);
    const bissextileCenturyModulo = hundreds % 4;
    const proemptosis = Math.floor((8 * hundreds + 13) / 25);
    const epact = (19 * yearRankInMetonicCycle + hundreds - bissextileCentury - proemptosis + 15) % 30;
    const bissextileYear = Math.floor(yearRankPerHundreds / 4);
    const bissextileYearModulo = yearRankPerHundreds % 4;
    const sundayLetter = (32 + 2 * bissextileCenturyModulo + 2 * bissextileYear - epact - bissextileYearModulo) % 7;
    const correction = Math.floor((yearRankInMetonicCycle + 11 * epact + 19 * sundayLetter) / 433);
    const month = Math.floor((epact + sundayLetter - 7 * correction + 90) / 25);
    const day = (epact + sundayLetter - 7 * correction + 33 * month + 19) % 32;
    const monthName = month === 3 ? "March" : month === 4 ? "April" : "";
    return `${monthName} ${getOrdinal(day)}`;
};

export default getEasterDate;
