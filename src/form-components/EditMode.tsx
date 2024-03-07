import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

type inputEvent = React.ChangeEvent<HTMLInputElement>;
type textEvent = React.ChangeEvent<HTMLTextAreaElement>;

export function EditMode(): JSX.Element {
    const [user, setUser] = useState<string>("Your Name");
    const [isEditMode, switchEditMode] = useState<boolean>(false);
    const [isStudent, switchIsStudent] = useState<boolean>(true);

    return (
        <Col>
            <div>
                <h3>Edit Mode</h3>
                <Form.Check
                    type="switch"
                    id="edit-switch"
                    label="Edit mode"
                    checked={isEditMode}
                    onChange={(event: inputEvent) =>
                        switchEditMode(event.target.checked)
                    }
                />
            </div>
            <Row>
                <Col>
                    {isEditMode ? (
                        <>
                            <Form.Group controlId="formMovieName">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control
                                    value={user}
                                    onChange={(event: textEvent) =>
                                        setUser(event.target.value)
                                    }
                                />
                            </Form.Group>
                            <Form.Check
                                type="checkbox"
                                id="is-student"
                                label="Are you a student?"
                                checked={isStudent}
                                onChange={(event: inputEvent) =>
                                    switchIsStudent(event.target.checked)
                                }
                            />
                        </>
                    ) : (
                        <p>
                            {user} is{" "}
                            {isStudent ? "a student" : "not a student"}
                        </p>
                    )}
                </Col>
            </Row>
        </Col>
    );
}
