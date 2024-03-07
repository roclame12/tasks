import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";

type inputEvent = React.ChangeEvent<HTMLInputElement>;

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: inputEvent) {
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
