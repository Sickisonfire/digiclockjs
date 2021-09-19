import { DigitTileStateMapping, TileIdAndClasses } from './types';
import { Tile } from './Tile';

export class Digit {
  digitId: string;
  htmlElement: HTMLDivElement;
  tiles: Tile[] = [];

  constructor(digitId: number) {
    this.digitId = `d-${digitId.toString()}`;
    this.htmlElement = this.createHtmlElement();
    this.createTiles();
    this.appendChildren();
  }

  private appendChildren() {
    this.tiles.forEach(tile => {
      this.htmlElement.appendChild(tile.htmlElement);
    });
  }

  private createHtmlElement(): HTMLDivElement {
    const element = document.createElement('div');
    element.id = this.digitId;
    element.classList.add('digit-container');
    return element;
  }

  private createTiles() {
    Object.values(TileIdAndClasses).forEach(tileClasses => {
      const tile = new Tile(tileClasses);
      this.tiles.push(tile);
    });
  }

  updateState(newDigitState: number) {
    const newTileState = DigitTileStateMapping[newDigitState];

    newTileState.forEach((tileState, index) => {
      this.tiles[index].updateState(tileState);
    });
  }
}
