import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

// 1

const keyEl = document.getElementById("#key")

const keys = [
    "q",
    "w",
    "e",
    "n",
    "i",
    "p",
]

let currentKeyIndex = Math.floor(Math.random() * keys.length)

keyEl.textContent = keys[currentKeyIndex]

document.addEventListener("keydown", onKeyDown)

function onKeyDown(event){
    console.log(event.key)
    if (event.key === keys[currentKeyIndex]) {
        currentKeyIndex += 1
        keyEl.textContent = keys[currentKeyIndex]
    } else{
        error({
            text: "ви натиснули невірну клавішу"
        });
    }
}