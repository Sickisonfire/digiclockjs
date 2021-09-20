export interface ConfigOptions {
  mode: ClockMode;
  styles: Styles;
}

export type Config = Partial<ConfigOptions>;

export interface Styles {
  activeColor?: string;
  inactiveColor?: string;
  tileWidth?: string;
  digitWidth?: string;
  digitHeight?: string;
  tileGap?: string;
  containerColor?: string;
  animation?: string;
}

type ClockMode = 'time' | 'stopwatch' | 'countdown';

export const TileIdAndClasses = {
  tileT: ['h-tile', 'h-tile-top'],
  tileC: ['h-tile', 'h-tile-center'],
  tileB: ['h-tile', 'h-tile-bottom'],
  tileTL: ['v-tile', 'v-tile-left-top'],
  tileTR: ['v-tile', 'v-tile-right-top'],
  tileBL: ['v-tile', 'v-tile-left-bottom'],
  tileBR: ['v-tile', 'v-tile-right-bottom'],
};

export type DigitTileState = {
  [key: number]: boolean[];
};

export const DigitTileStateMapping: DigitTileState =
  // [tileT, tileC, tileB, tileTL, tileTR, tileBL, tileBR]
  {
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
