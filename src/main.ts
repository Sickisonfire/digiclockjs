import './style.css';
import { ConfigOptions, Config, Styles, ClockMode, ClockState } from './types';
import { Tiles } from './components/componentData';
const initialvalues: ConfigOptions = {
  mode: 'time',
  styles: { color: 'red' },
};
// append element with generated domelements
// modes: clock (default), stopwatch, timer
//

export class Clock {
  clockContainerElementId: string;
  mode: ClockMode;
  styles: Styles;
  state: ClockState;
  constructor(clockContainerElementId: string, config?: Config) {
    this.clockContainerElementId = clockContainerElementId;
    const { mode, styles } = initialvalues;
    this.mode = mode;
    this.styles = styles;
    // TODO: state
    this.state = {};
    //TODO:override defaults with whatever comes with config

    this.init();
  }

  private init() {
    const clockContainer: HTMLElement = document.getElementById(
      this.clockContainerElementId
    )!;
    const clockComponents = this.composeClock();
    clockContainer.appendChild(clockComponents);
  }

  private composeClock(): HTMLDivElement {
    const clockWrapper = document.createElement('div');
    clockWrapper.classList.add('clock-container');

    const hourContainer = document.createElement('div');
    hourContainer.classList.add('two-digit-container');

    const minuteContainer = document.createElement('div');
    minuteContainer.classList.add('two-digit-container');

    const colonContainer = document.createElement('div');
    colonContainer.classList.add('colon-container');
    const dot = document.createElement('div');
    const dotTwo = document.createElement('div');
    dot.classList.add('dot');
    dotTwo.classList.add('dot');
    colonContainer.append(dot, dotTwo);

    for (let i = 0; i <= 3; i++) {
      if (i <= 1) {
        hourContainer.appendChild(this.composeDigit(i));
      } else {
        minuteContainer.appendChild(this.composeDigit(i));
      }
    }

    clockWrapper.append(hourContainer, colonContainer, minuteContainer);

    return clockWrapper;
  }

  private composeDigit(id: number): HTMLDivElement {
    const digitContainer: HTMLDivElement = document.createElement('div');
    digitContainer.classList.add('digit-container');

    Object.values(Tiles).forEach(tile => {
      const tileDivElement: HTMLDivElement = document.createElement('div');
      tileDivElement.classList.add(tile[0]);
      tileDivElement.classList.add(tile[1]);
      tileDivElement.id = tile[1] + '-' + id.toString();

      digitContainer.appendChild(tileDivElement);
    });

    return digitContainer;
  }
}

const clock = new Clock('app');
