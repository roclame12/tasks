import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [quizInProgress, setQuizStatus] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function startQuiz(): void {
        setQuizStatus(true);
        setAttempts(attempts - 1);
    }

    function stopQuiz(): void {
        setQuizStatus(false);
    }

    return (
        <div>
            {attempts}
            {attempts > 0 && quizInProgress === false ? (
                <Button onClick={startQuiz}>Start Quiz</Button>
            ) : (
                <Button onClick={startQuiz} disabled>
                    Start Quiz
                </Button>
            )}
            {quizInProgress === true ? (
                <Button onClick={stopQuiz}>Stop Quiz</Button>
            ) : (
                <Button onClick={stopQuiz} disabled>
                    Stop Quiz
                </Button>
            )}
            {quizInProgress === false ? (
                <Button onClick={() => setAttempts(attempts + 1)}>
                    Mulligan
                </Button>
            ) : (
                <Button onClick={stopQuiz} disabled>
                    Mulligan
                </Button>
            )}
        </div>
    );
}
