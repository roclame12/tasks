import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [chosenColor, setColor] = useState<string>("red");
    const COLORS: string[] = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white"
    ];

    return (
        <Col>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name={color}
                    onChange={(e) => setColor(e.target.value)}
                    id={color}
                    label={
                        <span style={{ backgroundColor: color }}>{color}</span>
                    }
                    value={color}
                    checked={chosenColor === color}
                />
            ))}
            <Row>
                <p>
                    You have chosen{" "}
                    {
                        <span style={{ backgroundColor: chosenColor }}>
                            {chosenColor}
                        </span>
                    }
                </p>
            </Row>
        </Col>
    );
}
