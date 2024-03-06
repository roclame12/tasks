import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

type InputEvent = React.ChangeEvent<HTMLInputElement>;

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }

    return (
        <Col>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswerPrompt">
                <Form.Label>
                    Answer: {userAnswer === expectedAnswer ? "✔️" : "❌"}
                </Form.Label>
                <Form.Control value={userAnswer} onChange={updateAnswer} />
            </Form.Group>
        </Col>
    );
}
