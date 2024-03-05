import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

type Holiday =
    | "Cristmas: 🧑‍🎄"
    | "Halloween: 👺"
    | "Independence Day: 💥"
    | "Labor Day: ☀️"
    | "Thanksgiving: 🇹🇷";

const BY_DATE: Record<Holiday, Holiday> = {
    "Independence Day: 💥": "Labor Day: ☀️",
    "Labor Day: ☀️": "Halloween: 👺",
    "Halloween: 👺": "Thanksgiving: 🇹🇷",
    "Thanksgiving: 🇹🇷": "Cristmas: 🧑‍🎄",
    "Cristmas: 🧑‍🎄": "Labor Day: ☀️"
};
const BY_ALPHABET: Record<Holiday, Holiday> = {
    "Cristmas: 🧑‍🎄": "Halloween: 👺",
    "Halloween: 👺": "Independence Day: 💥",
    "Independence Day: 💥": "Labor Day: ☀️",
    "Labor Day: ☀️": "Thanksgiving: 🇹🇷",
    "Thanksgiving: 🇹🇷": "Cristmas: 🧑‍🎄"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Cristmas: 🧑‍🎄");
    return (
        <Col>
            <h1>{holiday}</h1>
            <Row>
                <Col>
                    <Button onClick={() => setHoliday(BY_DATE[holiday])}>
                        Advance by Year
                    </Button>
                    <Button onClick={() => setHoliday(BY_ALPHABET[holiday])}>
                        Advance by Alphabet
                    </Button>
                </Col>
            </Row>
        </Col>
    );
}
