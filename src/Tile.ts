export class Tile {
  htmlElement: HTMLDivElement;
  state: boolean;

  constructor(tileHtmlClasses: string[]) {
    this.htmlElement = this.createHtmlElement(tileHtmlClasses);
    this.state = false;
  }
  private createHtmlElement(tileHtmlClasses: string[]): HTMLDivElement {
    const element = document.createElement('div');
    element.classList.add(...tileHtmlClasses);

    return element;
  }

  updateState(state: boolean) {
    this.state = state;
    this.htmlElement.classList.toggle('active', this.state);
  }
}
