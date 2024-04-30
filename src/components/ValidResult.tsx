type ValidResultProps = {
    year: number;
    currentYear: number;
    easterDate: string;
};
const ValidResult = ({ year, currentYear, easterDate }: ValidResultProps): JSX.Element => {
    const verbTime = year < currentYear ? "fell" : year === currentYear ? "falls" : "will fall";

    return (
        <p>
            In {year}, Easter {verbTime} on {easterDate}.
        </p>
    );
};

export default ValidResult;
