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
    for (const [tileName, tileClasses] of Object.entries(TileIdAndClasses)) {
      const tileId = `${tileName}-${this.digitId}`;
      const tile = new Tile(tileId, tileClasses);
      this.tiles.push(tile);
    }
  }

  updateState(newDigit: number) {
    const newTileState = DigitTileStateMapping[newDigit];

    newTileState.forEach((tileState, index) => {
      this.tiles[index].htmlElement.classList.toggle('active', tileState);
    });
  }
}
