import { Clock } from './Clock';
import './clockstyles.css';
import { Config } from './types';
//const config: Config = {
//  mode: 'timer',
//  styles: { color: { active: 'pink', inactive: 'brown' } },
//};

const config: Config = {
  styles: {
    activeColor: 'red',
    inactiveColor: 'transparent',
    tileGap: '2px',
    containerColor: 'transparent',
  },
};
const app = document.getElementById('app')!;
const clock = new Clock(config);

Clock.render(clock, app);
