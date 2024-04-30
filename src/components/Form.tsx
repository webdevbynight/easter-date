type FormProps = {
    setYear: React.Dispatch<React.SetStateAction<number>>;
};
const Form = ({ setYear }: FormProps): JSX.Element => {
    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        for (const [key, value] of data.entries()) {
            if (key === "year") {
                setYear(Number(value));
                break;
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="year">Choose a year (from 1583)</label>
                    <input id="year" name="year" type="number" min={1583} required />
                    <input type="submit" value="Calculate" />
                </p>
            </form>
        </>
    );
};

export default Form;
