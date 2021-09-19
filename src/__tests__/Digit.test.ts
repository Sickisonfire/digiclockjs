import { DigitTileState } from 'src/types';
import { Digit } from '../Digit';

describe('Digit test suite', () => {
  test('Digit instantiation', () => {
    const digit = new Digit(1);

    expect(digit.htmlElement.id).toBe('d-1');
    expect(digit.htmlElement.childElementCount).toBe(7);
  });

  test('updateState should update all tiles with according state', () => {
    // [tileT, tileC, tileB, tileTL, tileTR, tileBL, tileBR]
    const expectedStates: DigitTileState = {
      0: [true, false, true, true, true, true, true],
      1: [false, false, false, false, true, false, true],
      2: [true, true, true, false, true, true, false],
      3: [true, true, true, false, true, false, true],
      4: [false, true, false, true, true, false, true],
      5: [true, true, true, true, false, false, true],
      6: [true, true, true, true, false, true, true],
      7: [true, false, false, false, true, false, true],
      8: [true, true, true, true, true, true, true],
      9: [true, true, true, true, true, false, true],
    };

    const digit = new Digit(1);
    for (let i = 0; i <= 9; i++) {
      digit.updateState(i);
      for (let j = 0; j <= 6; j++) {
        expect(digit.tiles[j].state).toBe(expectedStates[i][j]);
      }
    }
  });
});
