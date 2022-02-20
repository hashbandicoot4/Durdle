import React, { useState } from 'react';
import { useLogic } from './logicHook';
import { Col, Container, Row } from 'reactstrap';
import Keyboard from './keyboard';
import OutputRow from './OutputRow';

const Game = () => {
    const { guesses, scores, win, lose, handleGuess } = useLogic();
    const [input, setInput] = useState('');

    return (
        <div>
            <Container style={{ textAlign: 'center' }}>
                <Col style={{ margin: '0 auto', width: '60%' }}>
                    <h1>Durdle</h1>
                    <Row style={{ minHeight: '20rem' }}>
                        <Col></Col>
                        <Col style={{ minWidth: '22rem' }}>
                            {guesses.map((g, i) => (
                                <OutputRow
                                    key={`r${i}`}
                                    guess={g}
                                    score={scores[i]}
                                ></OutputRow>
                            ))}
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Keyboard
                            guesses={guesses}
                            scores={scores}
                            handleClick={key => {
                                if (key == 'Backspace') {
                                    setInput(input.slice(0, -1));
                                } else if (key == 'Enter') {
                                    handleGuess(input);
                                } else {
                                    setInput(input + key);
                                }
                            }}
                        />
                        {/* <p>Guess</p>
            <input
                onSubmit={ev => {
                    ev.preventDefault();
                    handleGuess(ev.target);
                }}
            ></input> */}

                        <form
                            onSubmit={ev => {
                                ev.preventDefault();
                                handleGuess(input);
                            }}
                        >
                            <label>
                                Guess:
                                <input
                                    type="text"
                                    value={input}
                                    onChange={ev => setInput(ev.target.value)}
                                />
                            </label>
                        </form>
                    </Row>
                </Col>
            </Container>
            {/* <p>Test</p>
            <Row>
                <Col>
                    {guesses.map((guess, i) => (
                        <p key={`g${i}`}>{guess}</p>
                    ))}
                </Col>
                <Col>
                    {scores.map((scorelist, i) => (
                        <p key={`s${i}`}>{scorelist.join('')}</p>
                    ))}
                </Col>
            </Row> */}
        </div>
    );
};

export default Game;
