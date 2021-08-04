/**
 *  mode: string
 *  values -> clock (default), stopwatch, timer
 *  sets the mode for the clock.
 *
 *  styles: string
 *  sets the styling of the clock (color n stuff)
 *
 *  TODO: size
 *
 * */

export interface ConfigOptions {
  mode: ClockMode;
  styles: Styles;
}

export type Config = Partial<ConfigOptions>;

export interface Styles {
  color: string;
}

export type ClockMode = 'time' | 'stopwatch' | 'timer';

export interface ClockState {}
