import React from "react";

export default function Keyboard({handleClick}) {
    return (<div className = "flex flex-col">
        {keyboardKeys.map((keyboardRow, rowIndex) => {
            return (<div key={rowIndex} className="flex justify-center my-2 space"> 
                {keyboardRow.map((key, index) => {
                    let styles = "rounded bg-gray-400 font-bold uppercase py-2"
                    if (key !== "") {
                        styles += "bg-gray-400";
                    }
                    return (
                        <button key = {index} className={styles} onClick={ev=>handleClick(key)}>
                            {key}
                        </button>
                    );
                })}
            </div>);
        })}
    </div>)
};

const keyboardKeys = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"],
];