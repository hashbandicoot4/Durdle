import React, { useState } from 'react';
import { useLogic } from './logicHook';
import { Col, Row } from 'reactstrap';
import Keyboard from './keyboard';

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

            <Keyboard handleClick={(key)=> {
                if (key == "Backspace") {
                    setInput(input.slice(0, -1));
                }
                else if (key == "Enter") {
                    handleGuess(input);
                }
                else {
                    setInput(input+key);
                }
            }}/>
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
