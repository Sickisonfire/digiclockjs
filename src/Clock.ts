import './clockstyles.css';
import { Config, Styles } from './types';
import { Digit } from './Digit';
import { convertCamelToKebabCase } from './utils';

//const INITIALVALUES: ConfigOptions = {
//  mode: 'time',
//  styles: { color: { active: 'red', inactive: 'blue' } },
//};

export class Clock {
  htmlElement: HTMLDivElement;
  digits: Digit[] = [];
  config: Config;

  constructor(config: Config = {}) {
    //    const options = { ...INITIALVALUES, ...config };
    //TODO: options
    //TODO: Timing functions and accuracy
    //TODO: handle styling better
    this.config = config;
    this.htmlElement = this.createHtmlElement();
    this.createDigits();
    this.appendChildren();
    this.useWatchMode();
    this.configure(config.styles);
  }
  static render(clock: Clock, renderTarget: HTMLElement) {
    renderTarget.appendChild(clock.htmlElement);
  }
  private configure(styles: Styles | undefined) {
    if (styles) {
      for (const [cssVar, cssValue] of Object.entries(styles)) {
        this.htmlElement.style.setProperty(
          `--digiclock-${convertCamelToKebabCase(cssVar)}`,
          cssValue
        );
      }
    }
  }
  private appendChildren() {
    const container = this.htmlElement.querySelectorAll('.two-digit-container');
    container[0].append(this.digits[0].htmlElement, this.digits[1].htmlElement);

    this.htmlElement.insertBefore(this.createColon(), container[1]);

    container[1].append(this.digits[2].htmlElement, this.digits[3].htmlElement);

    this.htmlElement.insertBefore(this.createColon(), container[2]);

    container[2].append(this.digits[4].htmlElement, this.digits[5].htmlElement);
  }

  private createHtmlElement(): HTMLDivElement {
    const element = document.createElement('div');
    element.classList.add('clock-container');

    let digitGrouper = document.createElement('div');
    digitGrouper.classList.add('two-digit-container');
    element.appendChild(digitGrouper);

    digitGrouper = document.createElement('div');
    digitGrouper.classList.add('two-digit-container');
    element.appendChild(digitGrouper);

    digitGrouper = document.createElement('div');
    digitGrouper.classList.add('two-digit-container');
    element.appendChild(digitGrouper);

    return element;
  }

  private createDigits() {
    for (let i = 0; i < 6; i++) {
      const digit = new Digit(i);
      this.digits.push(digit);
    }
  }

  private createColon(): HTMLDivElement {
    const colonContainer = document.createElement('div');
    colonContainer.classList.add('colon-container');

    let dot = document.createElement('div');
    dot.classList.add('dot', 'active');
    colonContainer.appendChild(dot);

    dot = document.createElement('div');
    dot.classList.add('dot', 'active');
    colonContainer.appendChild(dot);
    return colonContainer;
  }

  private useWatchMode() {
    setInterval(() => {
      const date = new Date();
      let h = date.getHours();
      let m = date.getMinutes();
      let s = date.getSeconds();
      this.digits[0].updateState(Math.floor(h / 10));
      this.digits[1].updateState(h % 10);
      this.digits[2].updateState(Math.floor(m / 10));
      this.digits[3].updateState(m % 10);
      this.digits[4].updateState(Math.floor(s / 10));
      this.digits[5].updateState(s % 10);
    }, 1000);
  }
}
