import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [attemptAdder, setAttemptAdder] = useState<string>("");
    const addAttempts = parseInt(attemptAdder) || 0;
    return (
        <Col>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attempts}</p>
            <p></p>
            <Form.Group controlId="formAttemptAdder">
                <Form.Label>Add Attempts?</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptAdder}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptAdder(event.target.value)
                    }
                />
            </Form.Group>
            <Row>
                <Col>
                    <Button onClick={() => setAttempts(attempts - 1)}>
                        use
                    </Button>
                    <Button onClick={() => setAttempts(addAttempts + attempts)}>
                        gain
                    </Button>
                </Col>
            </Row>
        </Col>
    );
}
