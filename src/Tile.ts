export class Tile {
  tileId: string;
  htmlElement: HTMLDivElement;

  constructor(tileId: string, tileHtmlClasses: string[]) {
    this.tileId = tileId;
    this.htmlElement = this.createHtmlElement(tileHtmlClasses);
  }
  private createHtmlElement(tileHtmlClasses: string[]): HTMLDivElement {
    const element = document.createElement('div');
    element.id = this.tileId;
    element.classList.add(...tileHtmlClasses);

    return element;
  }
}
