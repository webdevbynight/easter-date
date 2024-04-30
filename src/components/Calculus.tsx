import getEasterDate from "../services/easter-date-calculation";
import InvalidResult from "./InvalidResult";
import ValidResult from "./ValidResult";

type CalculusProps = {
    year: number;
};
const Calculus = ({ year }: CalculusProps) => {
    const minValidYear = 1583;
    const currentYear = new Date(Date.now()).getFullYear();
    const isValidYear = year >= minValidYear;
    const easterDate = isValidYear ? getEasterDate(year) : "";

    return <>{year ? isValidYear ? <ValidResult {...{ year, currentYear, easterDate }} /> : <InvalidResult /> : null}</>;
};

export default Calculus;
