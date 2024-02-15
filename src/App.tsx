import React from "react";
import "./App.css";
import { Button, Container, Row } from "react-bootstrap";
import img from "./images/image.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Stephen
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <header className="App-header"> A new header?</header>
            <Container>
                <Row>
                    <div className="rectangle" />
                    <p>Wow a list and a button!</p>
                    <Button onClick={() => console.log("Hello World!")}>
                        Log Hello World
                    </Button>
                    <ul>
                        <li>list</li>
                        <li>with</li>
                        <li>3 elements</li>
                    </ul>
                </Row>
                <Row>
                    <div className="rectangle" />
                    <p>Is that a image?</p>
                    <img
                        src={img}
                        alt="I can't believe that this is an image"
                    />
                </Row>
            </Container>
        </div>
    );
}

export default App;
