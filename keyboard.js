import React from "react";

export default function Keyboard() {
    return (<div className = "flex flex-col">
        {keyboardKeys.map((keyboardRow, rowIndex) => {
            return (<div key={rowIndex} className="flex justify-center my-2 space"> 
                {keyboardRow.map(key => {
                    let styles = "rounded bg-gray-400 font-bold uppercase py-2"
                    if (key !== "") {
                        styles += "bg-gray-400";
                    }
                    return (
                        <button key = {index} className={styles}>
                            {key}
                        </button>
                    );
                })}
            </div>);
        })}
    </div>)
};

const keyboard = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["", "a", "s", "d", "f", "g", "h", "j", "k", "l", ""],
    ["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"],
];