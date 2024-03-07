import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);

    return (
        <Col>
            <h3>Multiple Choice Question</h3>

            <Form.Group controlId="answerOptionsForm">
                <Form.Label>
                    What is the answer?{" "}
                    {selected === expectedAnswer ? "✔️" : "❌"}
                </Form.Label>
                <Form.Select
                    value={selected}
                    onChange={(event) => setSelected(event.target.value)}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </Col>
    );
}
