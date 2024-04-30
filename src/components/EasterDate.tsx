import { useState } from "react";
import Calculus from "./Calculus";
import Form from "./Form";

const EasterDate = (): JSX.Element => {
    const [year, setYear] = useState(0);

    return (
        <>
            <Form {...{ setYear }} />
            <Calculus {...{ year }} />
        </>
    );
};

export default EasterDate;
