import React, { useEffect, useState } from 'react';

const defaultColours = {
    q: -1,
    w: -1,
    e: -1,
    r: -1,
    t: -1,
    y: -1,
    u: -1,
    i: -1,
    o: -1,
    p: -1,
    a: -1,
    s: -1,
    d: -1,
    f: -1,
    g: -1,
    h: -1,
    j: -1,
    k: -1,
    l: -1,
    z: -1,
    x: -1,
    c: -1,
    v: -1,
    b: -1,
    n: -1,
    m: -1,
};

export default function Keyboard({ handleClick, guesses, scores }) {
    const [colours, setColours] = useState(defaultColours);
    useEffect(() => {
        let new_colours = { ...defaultColours };
        if (scores.length > 0) {
            for (let guess in guesses) {
                for (let c in guesses[guess]) {
                    if (new_colours[guesses[guess][c]] !== 2) {
                        new_colours[guesses[guess][c]] = scores[guess][c];
                    }
                }
            }
        }
        setColours(new_colours);
    }, [guesses, scores]);

    const getBGColour = num => {
        switch (num) {
            case 0:
                return '#220050';
            case 1:
                return '#f0c002';
            case 2:
                return '#009e18';
            default:
                return '#d470ff';
        }
    };

    return (
        <div className="flex flex-col">
            {keyboardKeys.map((keyboardRow, rowIndex) => {
                return (
                    <div
                        key={rowIndex}
                        className="flex justify-center my-2 space"
                    >
                        {keyboardRow.map((key, index) => {
                            let styles =
                                'rounded bg-gray-400 font-bold uppercase py-2';
                            if (key !== '') {
                                styles += 'bg-gray-400';
                            }
                            return (
                                <button
                                    key={index}
                                    className={styles}
                                    onClick={ev => handleClick(key)}
                                    style={{
                                        backgroundColor: getBGColour(
                                            colours[key]
                                        ),
                                        color: '#ffffff',
                                        borderColor: '#220050',
                                    }}
                                >
                                    {key}
                                </button>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

const keyboardKeys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
];
