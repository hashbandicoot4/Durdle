import React, { useState } from 'react';
import { useLogic } from './logicHook';
import { Col, Row } from 'reactstrap';

const Game = () => {
    const { guesses, scores, win, lose, handleGuess } = useLogic();
    const [input, setInput] = useState('');

    return (
        <div>
            <p>Test</p>
            <Row>
                <Col>
                    {guesses.map(guess => (
                        <p key={guess}>{guess}</p>
                    ))}
                </Col>
                <Col>
                    {scores.map(scorelist => (
                        <p key={scorelist.join('')}>{scorelist.join('')}</p>
                    ))}
                </Col>
            </Row>
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
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Game;
