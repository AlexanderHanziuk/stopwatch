import {Stopwatch} from "./Stopwatch";
import {StopwatchUI} from "./StopwatchUI";
import './style.scss';

const stopwatch = new Stopwatch();
const displayElement = document.querySelector('.stopwatch-display') as HTMLElement;
const actionsElement = document.querySelector('.stopwatch-actions') as HTMLElement;
const historyElement = document.querySelector('.stopwatch-history') as HTMLElement;
const ui = new StopwatchUI(
    stopwatch,
    displayElement,
    actionsElement,
    historyElement,
);

ui.init();
