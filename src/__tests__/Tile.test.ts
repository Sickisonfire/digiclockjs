import { Tile } from '../Tile';

describe('Tile test suite', () => {
  test('should create html element with id and classes', () => {
    const createElementSpy = jest.spyOn(document, 'createElement');
    const tile = new Tile(['class1', 'class2']);

    expect(createElementSpy).toBeCalledWith('div');
    expect(tile.htmlElement.classList.value).toBe('class1 class2');
  });

  test('updateState should update tileState', () => {
    const tile = new Tile(['class1', 'class2']);
    tile.updateState(true);
    expect(tile.htmlElement.classList.contains('active')).toBe(true);
    expect(tile.state).toBe(true);
  });
});
