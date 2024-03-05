import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [lDie, setLDie] = useState<number>(1);
    const [rDie, setRDie] = useState<number>(2);

    return (
        <Col>
            <Row>
                {rDie === 1 && lDie === 1 ? (
                    <h1>Lose</h1>
                ) : rDie === lDie ? (
                    <h1>Win</h1>
                ) : (
                    <h1></h1>
                )}
            </Row>
            <Row>
                <Col>
                    <span data-testid="left-die">{lDie}</span>
                    <span data-testid="right-die">{rDie}</span>
                </Col>
            </Row>
            <Row>
                <Button onClick={() => setLDie(d6)}>Roll Left </Button>
                <Button onClick={() => setRDie(d6)}>Roll Right </Button>
            </Row>
        </Col>
    );
}
