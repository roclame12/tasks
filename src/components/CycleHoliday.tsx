import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

type Holiday =
    | "Holiday: 🧑‍🎄"
    | "Holiday: 👺"
    | "Holiday: 💥"
    | "Holiday: ☀️"
    | "Holiday: 🇹🇷";

const BY_DATE: Record<Holiday, Holiday> = {
    "Holiday: 💥": "Holiday: ☀️",
    "Holiday: ☀️": "Holiday: 👺",
    "Holiday: 👺": "Holiday: 🇹🇷",
    "Holiday: 🇹🇷": "Holiday: 🧑‍🎄",
    "Holiday: 🧑‍🎄": "Holiday: 💥"
};
const BY_ALPHABET: Record<Holiday, Holiday> = {
    "Holiday: 🧑‍🎄": "Holiday: 👺",
    "Holiday: 👺": "Holiday: 💥",
    "Holiday: 💥": "Holiday: ☀️",
    "Holiday: ☀️": "Holiday: 🇹🇷",
    "Holiday: 🇹🇷": "Holiday: 🧑‍🎄"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Holiday: ☀️");
    return (
        <Col>
            {holiday}
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
